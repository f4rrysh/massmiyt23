export function env(): 'local' | 'deploy' {
    return Deno.env.has('DENO_DEPLOYMENT_ID') && Deno.env.has('DENO_REGION')
        ? 'deploy'
        : 'local';
}

export function isDeployEnv(): boolean {
    return env() === 'deploy';
}

export function isLocalEnv(): boolean {
    return env() === 'local';
}
