import { config } from '@onflow/fcl';

config({
	'accessNode.api': process.env.NEXT_PUBLIC_ACCESS_NODE_API,
	'flow.network': process.env.NEXT_PUBLIC_FLOW_NETWORK,
	'discovery.wallet': process.env.NEXT_PUBLIC_DISCOVERY_WALLET,
});
