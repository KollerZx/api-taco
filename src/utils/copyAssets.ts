import { spawn } from 'node:child_process';

spawn('cp', ['-R', 'src/views', 'dist/']);
