import FtpConnection from 'vinyl-ftp';
import { configFTP } from '../config/ftp.js';
import util from 'gulp-util';

export const ftp = () => {
  configFTP.log = util.log;
  const FtpConnect = FtpConnection.create(configFTP);
  return app.gulp
    .src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'FTP',
          massage: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(FtpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
};
