import config from '../config/index'
import UserModel from '../models/User/userModel'
import passport  from 'passport'
import { JwtPayload } from '../types/auth'
import { Strategy, ExtractJwt, } from 'passport-jwt'

const opts : any = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.JWT_SECRET;

passport.use(new Strategy(opts, async (jwt_payload, done) => {
    try {
        const users = await UserModel.findById(jwt_payload._id);
        if (!users) {
            return done(new Error('ไม่พบผู้ใช้ในระบบ'), null)
        }
        return done(null, users);

    } catch (error) {
        done(error)
    }
}));

export default passport.authenticate('jwt', { session: false })
