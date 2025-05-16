import { Proxy } from '../index';
export declare enum ProxyCheckerStatus {
    ACTIVE = "Active",
    NOT_WORKING = "Not-working"
}
interface ProxyCheckerRes {
    status: ProxyCheckerStatus;
    error?: string;
}
declare const ProxyChecker: (proxy: Proxy) => Promise<ProxyCheckerRes>;
export default ProxyChecker;
//# sourceMappingURL=proxy-checker.d.ts.map