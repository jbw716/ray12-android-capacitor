declare module "@capacitor/core" {
  interface PluginRegistry {
    RayAndroidCap: RayAndroidCapPlugin;
  }
}

export interface RayAndroidCapPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
