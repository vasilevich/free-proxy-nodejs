export interface Proxy {
    host: string;
    port: number;
    protocol: string;
    country: string;
    latency: number;
}
export declare enum ProxyProtocol {
    'HTTP' = "HTTP",
    'HTTPS' = "HTTPS",
    'SOCKS' = "SOCKS"
}
interface GetProxiesOptions {
    protocol?: ProxyProtocol;
}
export declare function getProxies(otps?: GetProxiesOptions): Promise<Proxy[]>;
export {};
//# sourceMappingURL=index.d.ts.map