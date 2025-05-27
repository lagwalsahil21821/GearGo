const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const ApprovedEmail = require('../models/ApprovedEmail');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  const email = profile.emails[0].value;
  const approved = await ApprovedEmail.findOne({ email });
  if (!approved) return done(null, false, { message: 'Email not approved' });
  let user = await User.findOne({ googleId: profile.id });
  if (!user) {
    user = await User.create({
      googleId: profile.id,
      email,
      role: approved.role,
      displayName: profile.displayName
    });
  }
  return done(null, user);
}));

// No session serialization needed (JWT only)
