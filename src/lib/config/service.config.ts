import * as process from 'process';
import { ServerConfig } from '../types/config/server';

export default (): { server: ServerConfig } => ({
  server: {
    port: parseInt(process.env.PORT, 10) ?? 3000,
  },
});
