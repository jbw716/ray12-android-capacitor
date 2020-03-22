import { WebPlugin } from '@capacitor/core';
import { RayAndroidCapPlugin } from './definitions';

export class RayAndroidCapWeb extends WebPlugin implements RayAndroidCapPlugin {
  constructor() {
    super({
      name: 'RayAndroidCap',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  UhfReadDataFromSingleTag(): string {
    throw 'Error: This plugin is only compatible on the Android platform.';
  }

  closeApp(): string {
    throw 'Error: This plugin is only compatible on the Android platform.';
  }

}

const RayAndroidCap = new RayAndroidCapWeb();

export { RayAndroidCap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(RayAndroidCap);
