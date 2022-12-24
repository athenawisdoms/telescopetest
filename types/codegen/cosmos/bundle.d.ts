import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/node/v1beta1/query";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v1beta1/reflection";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/snapshots/v1beta1/snapshot";
import * as _25 from "./base/store/v1beta1/commit_info";
import * as _26 from "./base/store/v1beta1/listening";
import * as _27 from "./base/tendermint/v1beta1/query";
import * as _28 from "./base/tendermint/v1beta1/types";
import * as _29 from "./base/v1beta1/coin";
import * as _30 from "./capability/v1beta1/capability";
import * as _31 from "./capability/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/genesis";
import * as _33 from "./crisis/v1beta1/tx";
import * as _34 from "./crypto/ed25519/keys";
import * as _35 from "./crypto/hd/v1/hd";
import * as _36 from "./crypto/keyring/v1/record";
import * as _37 from "./crypto/multisig/keys";
import * as _38 from "./crypto/secp256k1/keys";
import * as _39 from "./crypto/secp256r1/keys";
import * as _40 from "./distribution/v1beta1/distribution";
import * as _41 from "./distribution/v1beta1/genesis";
import * as _42 from "./distribution/v1beta1/query";
import * as _43 from "./distribution/v1beta1/tx";
import * as _44 from "./evidence/v1beta1/evidence";
import * as _45 from "./evidence/v1beta1/genesis";
import * as _46 from "./evidence/v1beta1/query";
import * as _47 from "./evidence/v1beta1/tx";
import * as _48 from "./feegrant/v1beta1/feegrant";
import * as _49 from "./feegrant/v1beta1/genesis";
import * as _50 from "./feegrant/v1beta1/query";
import * as _51 from "./feegrant/v1beta1/tx";
import * as _52 from "./genutil/v1beta1/genesis";
import * as _53 from "./gov/v1/genesis";
import * as _54 from "./gov/v1/gov";
import * as _55 from "./gov/v1/query";
import * as _56 from "./gov/v1/tx";
import * as _57 from "./gov/v1beta1/genesis";
import * as _58 from "./gov/v1beta1/gov";
import * as _59 from "./gov/v1beta1/query";
import * as _60 from "./gov/v1beta1/tx";
import * as _61 from "./group/v1/events";
import * as _62 from "./group/v1/genesis";
import * as _63 from "./group/v1/query";
import * as _64 from "./group/v1/tx";
import * as _65 from "./group/v1/types";
import * as _66 from "./mint/v1beta1/genesis";
import * as _67 from "./mint/v1beta1/mint";
import * as _68 from "./mint/v1beta1/query";
import * as _70 from "./nft/v1beta1/event";
import * as _71 from "./nft/v1beta1/genesis";
import * as _72 from "./nft/v1beta1/nft";
import * as _73 from "./nft/v1beta1/query";
import * as _74 from "./nft/v1beta1/tx";
import * as _75 from "./orm/v1/orm";
import * as _76 from "./orm/v1alpha1/schema";
import * as _77 from "./params/v1beta1/params";
import * as _78 from "./params/v1beta1/query";
import * as _79 from "./slashing/v1beta1/genesis";
import * as _80 from "./slashing/v1beta1/query";
import * as _81 from "./slashing/v1beta1/slashing";
import * as _82 from "./slashing/v1beta1/tx";
import * as _83 from "./staking/v1beta1/authz";
import * as _84 from "./staking/v1beta1/genesis";
import * as _85 from "./staking/v1beta1/query";
import * as _86 from "./staking/v1beta1/staking";
import * as _87 from "./staking/v1beta1/tx";
import * as _88 from "./tx/signing/v1beta1/signing";
import * as _89 from "./tx/v1beta1/service";
import * as _90 from "./tx/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/query";
import * as _92 from "./upgrade/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _94 from "./vesting/v1beta1/tx";
import * as _95 from "./vesting/v1beta1/vesting";
import * as _143 from "./app/v1alpha1/query.rpc.Query";
import * as _144 from "./auth/v1beta1/query.rpc.Query";
import * as _145 from "./authz/v1beta1/query.rpc.Query";
import * as _146 from "./bank/v1beta1/query.rpc.Query";
import * as _147 from "./base/node/v1beta1/query.rpc.Service";
import * as _148 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _149 from "./distribution/v1beta1/query.rpc.Query";
import * as _150 from "./evidence/v1beta1/query.rpc.Query";
import * as _151 from "./feegrant/v1beta1/query.rpc.Query";
import * as _152 from "./gov/v1/query.rpc.Query";
import * as _153 from "./gov/v1beta1/query.rpc.Query";
import * as _154 from "./group/v1/query.rpc.Query";
import * as _155 from "./mint/v1beta1/query.rpc.Query";
import * as _156 from "./nft/v1beta1/query.rpc.Query";
import * as _157 from "./params/v1beta1/query.rpc.Query";
import * as _158 from "./slashing/v1beta1/query.rpc.Query";
import * as _159 from "./staking/v1beta1/query.rpc.Query";
import * as _160 from "./tx/v1beta1/service.rpc.Service";
import * as _161 from "./upgrade/v1beta1/query.rpc.Query";
import * as _162 from "./authz/v1beta1/tx.rpc.msg";
import * as _163 from "./bank/v1beta1/tx.rpc.msg";
import * as _164 from "./crisis/v1beta1/tx.rpc.msg";
import * as _165 from "./distribution/v1beta1/tx.rpc.msg";
import * as _166 from "./evidence/v1beta1/tx.rpc.msg";
import * as _167 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _168 from "./gov/v1/tx.rpc.msg";
import * as _169 from "./gov/v1beta1/tx.rpc.msg";
import * as _170 from "./group/v1/tx.rpc.msg";
import * as _171 from "./nft/v1beta1/tx.rpc.msg";
import * as _172 from "./slashing/v1beta1/tx.rpc.msg";
import * as _173 from "./staking/v1beta1/tx.rpc.msg";
import * as _174 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _175 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _143.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _4.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigRequest;
                fromJSON(_: any): _4.QueryConfigRequest;
                toJSON(_: _4.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_4.QueryConfigRequest>): _4.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _4.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigResponse;
                fromJSON(object: any): _4.QueryConfigResponse;
                toJSON(message: _4.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_4.QueryConfigResponse>): _4.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _3.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleDescriptor;
                fromJSON(object: any): _3.ModuleDescriptor;
                toJSON(message: _3.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_3.ModuleDescriptor>): _3.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _3.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.PackageReference;
                fromJSON(object: any): _3.PackageReference;
                toJSON(message: _3.PackageReference): unknown;
                fromPartial(object: Partial<_3.PackageReference>): _3.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _3.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MigrateFromInfo;
                fromJSON(object: any): _3.MigrateFromInfo;
                toJSON(message: _3.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_3.MigrateFromInfo>): _3.MigrateFromInfo;
            };
            Config: {
                encode(message: _2.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Config;
                fromJSON(object: any): _2.Config;
                toJSON(message: _2.Config): unknown;
                fromPartial(object: Partial<_2.Config>): _2.Config;
            };
            ModuleConfig: {
                encode(message: _2.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleConfig;
                fromJSON(object: any): _2.ModuleConfig;
                toJSON(message: _2.ModuleConfig): unknown;
                fromPartial(object: Partial<_2.ModuleConfig>): _2.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _144.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                moduleAccounts(request?: _7.QueryModuleAccountsRequest): Promise<_7.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _7.Bech32PrefixRequest): Promise<_7.Bech32PrefixResponse>;
                addressBytesToString(request: _7.AddressBytesToStringRequest): Promise<_7.AddressBytesToStringResponse>;
                addressStringToBytes(request: _7.AddressStringToBytesRequest): Promise<_7.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _7.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsRequest;
                fromJSON(object: any): _7.QueryAccountsRequest;
                toJSON(message: _7.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_7.QueryAccountsRequest>): _7.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _7.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsResponse;
                fromJSON(object: any): _7.QueryAccountsResponse;
                toJSON(message: _7.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_7.QueryAccountsResponse>): _7.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _7.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountRequest;
                fromJSON(object: any): _7.QueryAccountRequest;
                toJSON(message: _7.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_7.QueryAccountRequest>): _7.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _7.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsRequest;
                fromJSON(_: any): _7.QueryModuleAccountsRequest;
                toJSON(_: _7.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_7.QueryModuleAccountsRequest>): _7.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsResponse;
                fromJSON(object: any): _7.QueryParamsResponse;
                toJSON(message: _7.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _7.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountResponse;
                fromJSON(object: any): _7.QueryAccountResponse;
                toJSON(message: _7.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_7.QueryAccountResponse>): _7.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsRequest;
                fromJSON(_: any): _7.QueryParamsRequest;
                toJSON(_: _7.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _7.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsResponse;
                fromJSON(object: any): _7.QueryModuleAccountsResponse;
                toJSON(message: _7.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_7.QueryModuleAccountsResponse>): _7.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _7.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixRequest;
                fromJSON(_: any): _7.Bech32PrefixRequest;
                toJSON(_: _7.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_7.Bech32PrefixRequest>): _7.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _7.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixResponse;
                fromJSON(object: any): _7.Bech32PrefixResponse;
                toJSON(message: _7.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_7.Bech32PrefixResponse>): _7.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _7.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringRequest;
                fromJSON(object: any): _7.AddressBytesToStringRequest;
                toJSON(message: _7.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_7.AddressBytesToStringRequest>): _7.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _7.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringResponse;
                fromJSON(object: any): _7.AddressBytesToStringResponse;
                toJSON(message: _7.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_7.AddressBytesToStringResponse>): _7.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _7.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesRequest;
                fromJSON(object: any): _7.AddressStringToBytesRequest;
                toJSON(message: _7.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_7.AddressStringToBytesRequest>): _7.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _7.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesResponse;
                fromJSON(object: any): _7.AddressStringToBytesResponse;
                toJSON(message: _7.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_7.AddressStringToBytesResponse>): _7.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromJSON(object: any): _6.GenesisState;
                toJSON(message: _6.GenesisState): unknown;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
            };
            BaseAccount: {
                encode(message: _5.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.BaseAccount;
                fromJSON(object: any): _5.BaseAccount;
                toJSON(message: _5.BaseAccount): unknown;
                fromPartial(object: Partial<_5.BaseAccount>): _5.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _5.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleAccount;
                fromJSON(object: any): _5.ModuleAccount;
                toJSON(message: _5.ModuleAccount): unknown;
                fromPartial(object: Partial<_5.ModuleAccount>): _5.ModuleAccount;
            };
            Params: {
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Params;
                fromJSON(object: any): _5.Params;
                toJSON(message: _5.Params): unknown;
                fromPartial(object: Partial<_5.Params>): _5.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _162.MsgClientImpl;
            QueryClientImpl: typeof _145.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _11.QueryGrantsRequest): Promise<_11.QueryGrantsResponse>;
                granterGrants(request: _11.QueryGranterGrantsRequest): Promise<_11.QueryGranterGrantsResponse>;
                granteeGrants(request: _11.QueryGranteeGrantsRequest): Promise<_11.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _12.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _12.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _12.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _12.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _12.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _12.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _12.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrant;
                fromJSON(object: any): _12.MsgGrant;
                toJSON(message: _12.MsgGrant): unknown;
                fromPartial(object: Partial<_12.MsgGrant>): _12.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _12.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExecResponse;
                fromJSON(object: any): _12.MsgExecResponse;
                toJSON(message: _12.MsgExecResponse): unknown;
                fromPartial(object: Partial<_12.MsgExecResponse>): _12.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _12.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExec;
                fromJSON(object: any): _12.MsgExec;
                toJSON(message: _12.MsgExec): unknown;
                fromPartial(object: Partial<_12.MsgExec>): _12.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _12.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrantResponse;
                fromJSON(_: any): _12.MsgGrantResponse;
                toJSON(_: _12.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_12.MsgGrantResponse>): _12.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _12.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevoke;
                fromJSON(object: any): _12.MsgRevoke;
                toJSON(message: _12.MsgRevoke): unknown;
                fromPartial(object: Partial<_12.MsgRevoke>): _12.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _12.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevokeResponse;
                fromJSON(_: any): _12.MsgRevokeResponse;
                toJSON(_: _12.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_12.MsgRevokeResponse>): _12.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _11.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsRequest;
                fromJSON(object: any): _11.QueryGrantsRequest;
                toJSON(message: _11.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_11.QueryGrantsRequest>): _11.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _11.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsResponse;
                fromJSON(object: any): _11.QueryGrantsResponse;
                toJSON(message: _11.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_11.QueryGrantsResponse>): _11.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _11.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsRequest;
                fromJSON(object: any): _11.QueryGranterGrantsRequest;
                toJSON(message: _11.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_11.QueryGranterGrantsRequest>): _11.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _11.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsResponse;
                fromJSON(object: any): _11.QueryGranterGrantsResponse;
                toJSON(message: _11.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_11.QueryGranterGrantsResponse>): _11.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _11.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsRequest;
                fromJSON(object: any): _11.QueryGranteeGrantsRequest;
                toJSON(message: _11.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_11.QueryGranteeGrantsRequest>): _11.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _11.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsResponse;
                fromJSON(object: any): _11.QueryGranteeGrantsResponse;
                toJSON(message: _11.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_11.QueryGranteeGrantsResponse>): _11.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
            };
            EventGrant: {
                encode(message: _9.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventGrant;
                fromJSON(object: any): _9.EventGrant;
                toJSON(message: _9.EventGrant): unknown;
                fromPartial(object: Partial<_9.EventGrant>): _9.EventGrant;
            };
            EventRevoke: {
                encode(message: _9.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventRevoke;
                fromJSON(object: any): _9.EventRevoke;
                toJSON(message: _9.EventRevoke): unknown;
                fromPartial(object: Partial<_9.EventRevoke>): _9.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _8.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenericAuthorization;
                fromJSON(object: any): _8.GenericAuthorization;
                toJSON(message: _8.GenericAuthorization): unknown;
                fromPartial(object: Partial<_8.GenericAuthorization>): _8.GenericAuthorization;
            };
            Grant: {
                encode(message: _8.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Grant;
                fromJSON(object: any): _8.Grant;
                toJSON(message: _8.Grant): unknown;
                fromPartial(object: Partial<_8.Grant>): _8.Grant;
            };
            GrantAuthorization: {
                encode(message: _8.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantAuthorization;
                fromJSON(object: any): _8.GrantAuthorization;
                toJSON(message: _8.GrantAuthorization): unknown;
                fromPartial(object: Partial<_8.GrantAuthorization>): _8.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _8.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantQueueItem;
                fromJSON(object: any): _8.GrantQueueItem;
                toJSON(message: _8.GrantQueueItem): unknown;
                fromPartial(object: Partial<_8.GrantQueueItem>): _8.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _163.MsgClientImpl;
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _16.QueryBalanceRequest): Promise<_16.QueryBalanceResponse>;
                allBalances(request: _16.QueryAllBalancesRequest): Promise<_16.QueryAllBalancesResponse>;
                spendableBalances(request: _16.QuerySpendableBalancesRequest): Promise<_16.QuerySpendableBalancesResponse>;
                totalSupply(request?: _16.QueryTotalSupplyRequest): Promise<_16.QueryTotalSupplyResponse>;
                supplyOf(request: _16.QuerySupplyOfRequest): Promise<_16.QuerySupplyOfResponse>;
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                denomMetadata(request: _16.QueryDenomMetadataRequest): Promise<_16.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _16.QueryDenomsMetadataRequest): Promise<_16.QueryDenomsMetadataResponse>;
                denomOwners(request: _16.QueryDenomOwnersRequest): Promise<_16.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _17.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _17.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _17.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _17.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _17.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSend;
                fromJSON(object: any): _17.MsgSend;
                toJSON(message: _17.MsgSend): unknown;
                fromPartial(object: Partial<_17.MsgSend>): _17.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _17.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSendResponse;
                fromJSON(_: any): _17.MsgSendResponse;
                toJSON(_: _17.MsgSendResponse): unknown;
                fromPartial(_: Partial<_17.MsgSendResponse>): _17.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _17.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSend;
                fromJSON(object: any): _17.MsgMultiSend;
                toJSON(message: _17.MsgMultiSend): unknown;
                fromPartial(object: Partial<_17.MsgMultiSend>): _17.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _17.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSendResponse;
                fromJSON(_: any): _17.MsgMultiSendResponse;
                toJSON(_: _17.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_17.MsgMultiSendResponse>): _17.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _16.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceRequest;
                fromJSON(object: any): _16.QueryBalanceRequest;
                toJSON(message: _16.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_16.QueryBalanceRequest>): _16.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _16.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceResponse;
                fromJSON(object: any): _16.QueryBalanceResponse;
                toJSON(message: _16.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_16.QueryBalanceResponse>): _16.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _16.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesRequest;
                fromJSON(object: any): _16.QueryAllBalancesRequest;
                toJSON(message: _16.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_16.QueryAllBalancesRequest>): _16.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _16.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesResponse;
                fromJSON(object: any): _16.QueryAllBalancesResponse;
                toJSON(message: _16.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_16.QueryAllBalancesResponse>): _16.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _16.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesRequest;
                fromJSON(object: any): _16.QuerySpendableBalancesRequest;
                toJSON(message: _16.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_16.QuerySpendableBalancesRequest>): _16.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _16.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesResponse;
                fromJSON(object: any): _16.QuerySpendableBalancesResponse;
                toJSON(message: _16.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_16.QuerySpendableBalancesResponse>): _16.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _16.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyRequest;
                fromJSON(object: any): _16.QueryTotalSupplyRequest;
                toJSON(message: _16.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_16.QueryTotalSupplyRequest>): _16.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _16.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyResponse;
                fromJSON(object: any): _16.QueryTotalSupplyResponse;
                toJSON(message: _16.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_16.QueryTotalSupplyResponse>): _16.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _16.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfRequest;
                fromJSON(object: any): _16.QuerySupplyOfRequest;
                toJSON(message: _16.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_16.QuerySupplyOfRequest>): _16.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _16.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfResponse;
                fromJSON(object: any): _16.QuerySupplyOfResponse;
                toJSON(message: _16.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_16.QuerySupplyOfResponse>): _16.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsRequest;
                fromJSON(_: any): _16.QueryParamsRequest;
                toJSON(_: _16.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsResponse;
                fromJSON(object: any): _16.QueryParamsResponse;
                toJSON(message: _16.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _16.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataRequest;
                fromJSON(object: any): _16.QueryDenomsMetadataRequest;
                toJSON(message: _16.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_16.QueryDenomsMetadataRequest>): _16.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _16.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataResponse;
                fromJSON(object: any): _16.QueryDenomsMetadataResponse;
                toJSON(message: _16.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_16.QueryDenomsMetadataResponse>): _16.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _16.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataRequest;
                fromJSON(object: any): _16.QueryDenomMetadataRequest;
                toJSON(message: _16.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_16.QueryDenomMetadataRequest>): _16.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _16.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataResponse;
                fromJSON(object: any): _16.QueryDenomMetadataResponse;
                toJSON(message: _16.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_16.QueryDenomMetadataResponse>): _16.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _16.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersRequest;
                fromJSON(object: any): _16.QueryDenomOwnersRequest;
                toJSON(message: _16.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_16.QueryDenomOwnersRequest>): _16.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _16.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DenomOwner;
                fromJSON(object: any): _16.DenomOwner;
                toJSON(message: _16.DenomOwner): unknown;
                fromPartial(object: Partial<_16.DenomOwner>): _16.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _16.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersResponse;
                fromJSON(object: any): _16.QueryDenomOwnersResponse;
                toJSON(message: _16.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_16.QueryDenomOwnersResponse>): _16.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
                fromJSON(object: any): _15.GenesisState;
                toJSON(message: _15.GenesisState): unknown;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            };
            Balance: {
                encode(message: _15.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Balance;
                fromJSON(object: any): _15.Balance;
                toJSON(message: _15.Balance): unknown;
                fromPartial(object: Partial<_15.Balance>): _15.Balance;
            };
            Params: {
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Params;
                fromJSON(object: any): _14.Params;
                toJSON(message: _14.Params): unknown;
                fromPartial(object: Partial<_14.Params>): _14.Params;
            };
            SendEnabled: {
                encode(message: _14.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SendEnabled;
                fromJSON(object: any): _14.SendEnabled;
                toJSON(message: _14.SendEnabled): unknown;
                fromPartial(object: Partial<_14.SendEnabled>): _14.SendEnabled;
            };
            Input: {
                encode(message: _14.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Input;
                fromJSON(object: any): _14.Input;
                toJSON(message: _14.Input): unknown;
                fromPartial(object: Partial<_14.Input>): _14.Input;
            };
            Output: {
                encode(message: _14.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Output;
                fromJSON(object: any): _14.Output;
                toJSON(message: _14.Output): unknown;
                fromPartial(object: Partial<_14.Output>): _14.Output;
            };
            Supply: {
                encode(message: _14.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Supply;
                fromJSON(object: any): _14.Supply;
                toJSON(message: _14.Supply): unknown;
                fromPartial(object: Partial<_14.Supply>): _14.Supply;
            };
            DenomUnit: {
                encode(message: _14.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.DenomUnit;
                fromJSON(object: any): _14.DenomUnit;
                toJSON(message: _14.DenomUnit): unknown;
                fromPartial(object: Partial<_14.DenomUnit>): _14.DenomUnit;
            };
            Metadata: {
                encode(message: _14.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Metadata;
                fromJSON(object: any): _14.Metadata;
                toJSON(message: _14.Metadata): unknown;
                fromPartial(object: Partial<_14.Metadata>): _14.Metadata;
            };
            SendAuthorization: {
                encode(message: _13.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SendAuthorization;
                fromJSON(object: any): _13.SendAuthorization;
                toJSON(message: _13.SendAuthorization): unknown;
                fromPartial(object: Partial<_13.SendAuthorization>): _13.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _18.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxResponse;
                    fromJSON(object: any): _18.TxResponse;
                    toJSON(message: _18.TxResponse): unknown;
                    fromPartial(object: Partial<_18.TxResponse>): _18.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _18.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ABCIMessageLog;
                    fromJSON(object: any): _18.ABCIMessageLog;
                    toJSON(message: _18.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_18.ABCIMessageLog>): _18.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _18.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.StringEvent;
                    fromJSON(object: any): _18.StringEvent;
                    toJSON(message: _18.StringEvent): unknown;
                    fromPartial(object: Partial<_18.StringEvent>): _18.StringEvent;
                };
                Attribute: {
                    encode(message: _18.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Attribute;
                    fromJSON(object: any): _18.Attribute;
                    toJSON(message: _18.Attribute): unknown;
                    fromPartial(object: Partial<_18.Attribute>): _18.Attribute;
                };
                GasInfo: {
                    encode(message: _18.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GasInfo;
                    fromJSON(object: any): _18.GasInfo;
                    toJSON(message: _18.GasInfo): unknown;
                    fromPartial(object: Partial<_18.GasInfo>): _18.GasInfo;
                };
                Result: {
                    encode(message: _18.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Result;
                    fromJSON(object: any): _18.Result;
                    toJSON(message: _18.Result): unknown;
                    fromPartial(object: Partial<_18.Result>): _18.Result;
                };
                SimulationResponse: {
                    encode(message: _18.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SimulationResponse;
                    fromJSON(object: any): _18.SimulationResponse;
                    toJSON(message: _18.SimulationResponse): unknown;
                    fromPartial(object: Partial<_18.SimulationResponse>): _18.SimulationResponse;
                };
                MsgData: {
                    encode(message: _18.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgData;
                    fromJSON(object: any): _18.MsgData;
                    toJSON(message: _18.MsgData): unknown;
                    fromPartial(object: Partial<_18.MsgData>): _18.MsgData;
                };
                TxMsgData: {
                    encode(message: _18.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxMsgData;
                    fromJSON(object: any): _18.TxMsgData;
                    toJSON(message: _18.TxMsgData): unknown;
                    fromPartial(object: Partial<_18.TxMsgData>): _18.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _18.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SearchTxsResult;
                    fromJSON(object: any): _18.SearchTxsResult;
                    toJSON(message: _18.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_18.SearchTxsResult>): _18.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _19.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pairs;
                    fromJSON(object: any): _19.Pairs;
                    toJSON(message: _19.Pairs): unknown;
                    fromPartial(object: Partial<_19.Pairs>): _19.Pairs;
                };
                Pair: {
                    encode(message: _19.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pair;
                    fromJSON(object: any): _19.Pair;
                    toJSON(message: _19.Pair): unknown;
                    fromPartial(object: Partial<_19.Pair>): _19.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _147.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _20.ConfigRequest): Promise<_20.ConfigResponse>;
                };
                ConfigRequest: {
                    encode(_: _20.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ConfigRequest;
                    fromJSON(_: any): _20.ConfigRequest;
                    toJSON(_: _20.ConfigRequest): unknown;
                    fromPartial(_: Partial<_20.ConfigRequest>): _20.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _20.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ConfigResponse;
                    fromJSON(object: any): _20.ConfigResponse;
                    toJSON(message: _20.ConfigResponse): unknown;
                    fromPartial(object: Partial<_20.ConfigResponse>): _20.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _21.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PageRequest;
                    fromJSON(object: any): _21.PageRequest;
                    toJSON(message: _21.PageRequest): unknown;
                    fromPartial(object: Partial<_21.PageRequest>): _21.PageRequest;
                };
                PageResponse: {
                    encode(message: _21.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PageResponse;
                    fromJSON(object: any): _21.PageResponse;
                    toJSON(message: _21.PageResponse): unknown;
                    fromPartial(object: Partial<_21.PageResponse>): _21.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _22.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListAllInterfacesRequest;
                    fromJSON(_: any): _22.ListAllInterfacesRequest;
                    toJSON(_: _22.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_22.ListAllInterfacesRequest>): _22.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _22.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListAllInterfacesResponse;
                    fromJSON(object: any): _22.ListAllInterfacesResponse;
                    toJSON(message: _22.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_22.ListAllInterfacesResponse>): _22.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _22.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListImplementationsRequest;
                    fromJSON(object: any): _22.ListImplementationsRequest;
                    toJSON(message: _22.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_22.ListImplementationsRequest>): _22.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _22.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListImplementationsResponse;
                    fromJSON(object: any): _22.ListImplementationsResponse;
                    toJSON(message: _22.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_22.ListImplementationsResponse>): _22.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _23.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.AppDescriptor;
                    fromJSON(object: any): _23.AppDescriptor;
                    toJSON(message: _23.AppDescriptor): unknown;
                    fromPartial(object: Partial<_23.AppDescriptor>): _23.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _23.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.TxDescriptor;
                    fromJSON(object: any): _23.TxDescriptor;
                    toJSON(message: _23.TxDescriptor): unknown;
                    fromPartial(object: Partial<_23.TxDescriptor>): _23.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _23.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.AuthnDescriptor;
                    fromJSON(object: any): _23.AuthnDescriptor;
                    toJSON(message: _23.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_23.AuthnDescriptor>): _23.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _23.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SigningModeDescriptor;
                    fromJSON(object: any): _23.SigningModeDescriptor;
                    toJSON(message: _23.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_23.SigningModeDescriptor>): _23.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _23.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ChainDescriptor;
                    fromJSON(object: any): _23.ChainDescriptor;
                    toJSON(message: _23.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_23.ChainDescriptor>): _23.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _23.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CodecDescriptor;
                    fromJSON(object: any): _23.CodecDescriptor;
                    toJSON(message: _23.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_23.CodecDescriptor>): _23.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _23.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.InterfaceDescriptor;
                    fromJSON(object: any): _23.InterfaceDescriptor;
                    toJSON(message: _23.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_23.InterfaceDescriptor>): _23.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _23.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _23.InterfaceImplementerDescriptor;
                    toJSON(message: _23.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_23.InterfaceImplementerDescriptor>): _23.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _23.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _23.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _23.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_23.InterfaceAcceptingMessageDescriptor>): _23.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _23.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ConfigurationDescriptor;
                    fromJSON(object: any): _23.ConfigurationDescriptor;
                    toJSON(message: _23.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_23.ConfigurationDescriptor>): _23.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _23.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgDescriptor;
                    fromJSON(object: any): _23.MsgDescriptor;
                    toJSON(message: _23.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_23.MsgDescriptor>): _23.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _23.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _23.GetAuthnDescriptorRequest;
                    toJSON(_: _23.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetAuthnDescriptorRequest>): _23.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _23.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _23.GetAuthnDescriptorResponse;
                    toJSON(message: _23.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetAuthnDescriptorResponse>): _23.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _23.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetChainDescriptorRequest;
                    fromJSON(_: any): _23.GetChainDescriptorRequest;
                    toJSON(_: _23.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetChainDescriptorRequest>): _23.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _23.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetChainDescriptorResponse;
                    fromJSON(object: any): _23.GetChainDescriptorResponse;
                    toJSON(message: _23.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetChainDescriptorResponse>): _23.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _23.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetCodecDescriptorRequest;
                    fromJSON(_: any): _23.GetCodecDescriptorRequest;
                    toJSON(_: _23.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetCodecDescriptorRequest>): _23.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _23.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetCodecDescriptorResponse;
                    fromJSON(object: any): _23.GetCodecDescriptorResponse;
                    toJSON(message: _23.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetCodecDescriptorResponse>): _23.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _23.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _23.GetConfigurationDescriptorRequest;
                    toJSON(_: _23.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetConfigurationDescriptorRequest>): _23.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _23.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _23.GetConfigurationDescriptorResponse;
                    toJSON(message: _23.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetConfigurationDescriptorResponse>): _23.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _23.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _23.GetQueryServicesDescriptorRequest;
                    toJSON(_: _23.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetQueryServicesDescriptorRequest>): _23.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _23.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _23.GetQueryServicesDescriptorResponse;
                    toJSON(message: _23.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetQueryServicesDescriptorResponse>): _23.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _23.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetTxDescriptorRequest;
                    fromJSON(_: any): _23.GetTxDescriptorRequest;
                    toJSON(_: _23.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetTxDescriptorRequest>): _23.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _23.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetTxDescriptorResponse;
                    fromJSON(object: any): _23.GetTxDescriptorResponse;
                    toJSON(message: _23.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetTxDescriptorResponse>): _23.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _23.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryServicesDescriptor;
                    fromJSON(object: any): _23.QueryServicesDescriptor;
                    toJSON(message: _23.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_23.QueryServicesDescriptor>): _23.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _23.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryServiceDescriptor;
                    fromJSON(object: any): _23.QueryServiceDescriptor;
                    toJSON(message: _23.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_23.QueryServiceDescriptor>): _23.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _23.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryMethodDescriptor;
                    fromJSON(object: any): _23.QueryMethodDescriptor;
                    toJSON(message: _23.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_23.QueryMethodDescriptor>): _23.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _24.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Snapshot;
                    fromJSON(object: any): _24.Snapshot;
                    toJSON(message: _24.Snapshot): unknown;
                    fromPartial(object: Partial<_24.Snapshot>): _24.Snapshot;
                };
                Metadata: {
                    encode(message: _24.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Metadata;
                    fromJSON(object: any): _24.Metadata;
                    toJSON(message: _24.Metadata): unknown;
                    fromPartial(object: Partial<_24.Metadata>): _24.Metadata;
                };
                SnapshotItem: {
                    encode(message: _24.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotItem;
                    fromJSON(object: any): _24.SnapshotItem;
                    toJSON(message: _24.SnapshotItem): unknown;
                    fromPartial(object: Partial<_24.SnapshotItem>): _24.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _24.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotStoreItem;
                    fromJSON(object: any): _24.SnapshotStoreItem;
                    toJSON(message: _24.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_24.SnapshotStoreItem>): _24.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _24.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotIAVLItem;
                    fromJSON(object: any): _24.SnapshotIAVLItem;
                    toJSON(message: _24.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_24.SnapshotIAVLItem>): _24.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _24.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotExtensionMeta;
                    fromJSON(object: any): _24.SnapshotExtensionMeta;
                    toJSON(message: _24.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_24.SnapshotExtensionMeta>): _24.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _24.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotExtensionPayload;
                    fromJSON(object: any): _24.SnapshotExtensionPayload;
                    toJSON(message: _24.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_24.SnapshotExtensionPayload>): _24.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _24.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotKVItem;
                    fromJSON(object: any): _24.SnapshotKVItem;
                    toJSON(message: _24.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_24.SnapshotKVItem>): _24.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _24.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotSchema;
                    fromJSON(object: any): _24.SnapshotSchema;
                    toJSON(message: _24.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_24.SnapshotSchema>): _24.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _26.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.StoreKVPair;
                    fromJSON(object: any): _26.StoreKVPair;
                    toJSON(message: _26.StoreKVPair): unknown;
                    fromPartial(object: Partial<_26.StoreKVPair>): _26.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _25.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommitInfo;
                    fromJSON(object: any): _25.CommitInfo;
                    toJSON(message: _25.CommitInfo): unknown;
                    fromPartial(object: Partial<_25.CommitInfo>): _25.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _25.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StoreInfo;
                    fromJSON(object: any): _25.StoreInfo;
                    toJSON(message: _25.StoreInfo): unknown;
                    fromPartial(object: Partial<_25.StoreInfo>): _25.StoreInfo;
                };
                CommitID: {
                    encode(message: _25.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommitID;
                    fromJSON(object: any): _25.CommitID;
                    toJSON(message: _25.CommitID): unknown;
                    fromPartial(object: Partial<_25.CommitID>): _25.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _148.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _27.GetNodeInfoRequest): Promise<_27.GetNodeInfoResponse>;
                    getSyncing(request?: _27.GetSyncingRequest): Promise<_27.GetSyncingResponse>;
                    getLatestBlock(request?: _27.GetLatestBlockRequest): Promise<_27.GetLatestBlockResponse>;
                    getBlockByHeight(request: _27.GetBlockByHeightRequest): Promise<_27.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _27.GetLatestValidatorSetRequest): Promise<_27.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _27.GetValidatorSetByHeightRequest): Promise<_27.GetValidatorSetByHeightResponse>;
                };
                Block: {
                    encode(message: _28.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Block;
                    fromJSON(object: any): _28.Block;
                    toJSON(message: _28.Block): unknown;
                    fromPartial(object: Partial<_28.Block>): _28.Block;
                };
                Header: {
                    encode(message: _28.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Header;
                    fromJSON(object: any): _28.Header;
                    toJSON(message: _28.Header): unknown;
                    fromPartial(object: Partial<_28.Header>): _28.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _27.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _27.GetValidatorSetByHeightRequest;
                    toJSON(message: _27.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_27.GetValidatorSetByHeightRequest>): _27.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _27.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _27.GetValidatorSetByHeightResponse;
                    toJSON(message: _27.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_27.GetValidatorSetByHeightResponse>): _27.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _27.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _27.GetLatestValidatorSetRequest;
                    toJSON(message: _27.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_27.GetLatestValidatorSetRequest>): _27.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _27.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _27.GetLatestValidatorSetResponse;
                    toJSON(message: _27.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_27.GetLatestValidatorSetResponse>): _27.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _27.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Validator;
                    fromJSON(object: any): _27.Validator;
                    toJSON(message: _27.Validator): unknown;
                    fromPartial(object: Partial<_27.Validator>): _27.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _27.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetBlockByHeightRequest;
                    fromJSON(object: any): _27.GetBlockByHeightRequest;
                    toJSON(message: _27.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_27.GetBlockByHeightRequest>): _27.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _27.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetBlockByHeightResponse;
                    fromJSON(object: any): _27.GetBlockByHeightResponse;
                    toJSON(message: _27.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_27.GetBlockByHeightResponse>): _27.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _27.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestBlockRequest;
                    fromJSON(_: any): _27.GetLatestBlockRequest;
                    toJSON(_: _27.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_27.GetLatestBlockRequest>): _27.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _27.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestBlockResponse;
                    fromJSON(object: any): _27.GetLatestBlockResponse;
                    toJSON(message: _27.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_27.GetLatestBlockResponse>): _27.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _27.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetSyncingRequest;
                    fromJSON(_: any): _27.GetSyncingRequest;
                    toJSON(_: _27.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_27.GetSyncingRequest>): _27.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _27.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetSyncingResponse;
                    fromJSON(object: any): _27.GetSyncingResponse;
                    toJSON(message: _27.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_27.GetSyncingResponse>): _27.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _27.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetNodeInfoRequest;
                    fromJSON(_: any): _27.GetNodeInfoRequest;
                    toJSON(_: _27.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_27.GetNodeInfoRequest>): _27.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _27.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetNodeInfoResponse;
                    fromJSON(object: any): _27.GetNodeInfoResponse;
                    toJSON(message: _27.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_27.GetNodeInfoResponse>): _27.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _27.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.VersionInfo;
                    fromJSON(object: any): _27.VersionInfo;
                    toJSON(message: _27.VersionInfo): unknown;
                    fromPartial(object: Partial<_27.VersionInfo>): _27.VersionInfo;
                };
                Module: {
                    encode(message: _27.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Module;
                    fromJSON(object: any): _27.Module;
                    toJSON(message: _27.Module): unknown;
                    fromPartial(object: Partial<_27.Module>): _27.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _29.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Coin;
                fromJSON(object: any): _29.Coin;
                toJSON(message: _29.Coin): unknown;
                fromPartial(object: Partial<_29.Coin>): _29.Coin;
            };
            DecCoin: {
                encode(message: _29.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.DecCoin;
                fromJSON(object: any): _29.DecCoin;
                toJSON(message: _29.DecCoin): unknown;
                fromPartial(object: Partial<_29.DecCoin>): _29.DecCoin;
            };
            IntProto: {
                encode(message: _29.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.IntProto;
                fromJSON(object: any): _29.IntProto;
                toJSON(message: _29.IntProto): unknown;
                fromPartial(object: Partial<_29.IntProto>): _29.IntProto;
            };
            DecProto: {
                encode(message: _29.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.DecProto;
                fromJSON(object: any): _29.DecProto;
                toJSON(message: _29.DecProto): unknown;
                fromPartial(object: Partial<_29.DecProto>): _29.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _31.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GenesisOwners;
                fromJSON(object: any): _31.GenesisOwners;
                toJSON(message: _31.GenesisOwners): unknown;
                fromPartial(object: Partial<_31.GenesisOwners>): _31.GenesisOwners;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GenesisState;
                fromJSON(object: any): _31.GenesisState;
                toJSON(message: _31.GenesisState): unknown;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
            Capability: {
                encode(message: _30.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Capability;
                fromJSON(object: any): _30.Capability;
                toJSON(message: _30.Capability): unknown;
                fromPartial(object: Partial<_30.Capability>): _30.Capability;
            };
            Owner: {
                encode(message: _30.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Owner;
                fromJSON(object: any): _30.Owner;
                toJSON(message: _30.Owner): unknown;
                fromPartial(object: Partial<_30.Owner>): _30.Owner;
            };
            CapabilityOwners: {
                encode(message: _30.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.CapabilityOwners;
                fromJSON(object: any): _30.CapabilityOwners;
                toJSON(message: _30.CapabilityOwners): unknown;
                fromPartial(object: Partial<_30.CapabilityOwners>): _30.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _33.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _33.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _33.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _33.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _33.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _33.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _33.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _33.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _33.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _33.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVerifyInvariant;
                fromJSON(object: any): _33.MsgVerifyInvariant;
                toJSON(message: _33.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_33.MsgVerifyInvariant>): _33.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _33.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVerifyInvariantResponse;
                fromJSON(_: any): _33.MsgVerifyInvariantResponse;
                toJSON(_: _33.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_33.MsgVerifyInvariantResponse>): _33.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GenesisState;
                fromJSON(object: any): _32.GenesisState;
                toJSON(message: _32.GenesisState): unknown;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _34.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.PubKey;
                fromJSON(object: any): _34.PubKey;
                toJSON(message: _34.PubKey): unknown;
                fromPartial(object: Partial<_34.PubKey>): _34.PubKey;
            };
            PrivKey: {
                encode(message: _34.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.PrivKey;
                fromJSON(object: any): _34.PrivKey;
                toJSON(message: _34.PrivKey): unknown;
                fromPartial(object: Partial<_34.PrivKey>): _34.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _35.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.BIP44Params;
                    fromJSON(object: any): _35.BIP44Params;
                    toJSON(message: _35.BIP44Params): unknown;
                    fromPartial(object: Partial<_35.BIP44Params>): _35.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _36.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Record;
                    fromJSON(object: any): _36.Record;
                    toJSON(message: _36.Record): unknown;
                    fromPartial(object: Partial<_36.Record>): _36.Record;
                };
                Record_Local: {
                    encode(message: _36.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Record_Local;
                    fromJSON(object: any): _36.Record_Local;
                    toJSON(message: _36.Record_Local): unknown;
                    fromPartial(object: Partial<_36.Record_Local>): _36.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _36.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Record_Ledger;
                    fromJSON(object: any): _36.Record_Ledger;
                    toJSON(message: _36.Record_Ledger): unknown;
                    fromPartial(object: Partial<_36.Record_Ledger>): _36.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _36.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Record_Multi;
                    fromJSON(_: any): _36.Record_Multi;
                    toJSON(_: _36.Record_Multi): unknown;
                    fromPartial(_: Partial<_36.Record_Multi>): _36.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _36.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Record_Offline;
                    fromJSON(_: any): _36.Record_Offline;
                    toJSON(_: _36.Record_Offline): unknown;
                    fromPartial(_: Partial<_36.Record_Offline>): _36.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _37.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.LegacyAminoPubKey;
                fromJSON(object: any): _37.LegacyAminoPubKey;
                toJSON(message: _37.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_37.LegacyAminoPubKey>): _37.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _38.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PubKey;
                fromJSON(object: any): _38.PubKey;
                toJSON(message: _38.PubKey): unknown;
                fromPartial(object: Partial<_38.PubKey>): _38.PubKey;
            };
            PrivKey: {
                encode(message: _38.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PrivKey;
                fromJSON(object: any): _38.PrivKey;
                toJSON(message: _38.PrivKey): unknown;
                fromPartial(object: Partial<_38.PrivKey>): _38.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _39.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PubKey;
                fromJSON(object: any): _39.PubKey;
                toJSON(message: _39.PubKey): unknown;
                fromPartial(object: Partial<_39.PubKey>): _39.PubKey;
            };
            PrivKey: {
                encode(message: _39.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.PrivKey;
                fromJSON(object: any): _39.PrivKey;
                toJSON(message: _39.PrivKey): unknown;
                fromPartial(object: Partial<_39.PrivKey>): _39.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _165.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _42.QueryParamsRequest): Promise<_42.QueryParamsResponse>;
                validatorOutstandingRewards(request: _42.QueryValidatorOutstandingRewardsRequest): Promise<_42.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _42.QueryValidatorCommissionRequest): Promise<_42.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _42.QueryValidatorSlashesRequest): Promise<_42.QueryValidatorSlashesResponse>;
                delegationRewards(request: _42.QueryDelegationRewardsRequest): Promise<_42.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _42.QueryDelegationTotalRewardsRequest): Promise<_42.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _42.QueryDelegatorValidatorsRequest): Promise<_42.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _42.QueryDelegatorWithdrawAddressRequest): Promise<_42.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _42.QueryCommunityPoolRequest): Promise<_42.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _43.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _43.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _43.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _43.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _43.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _43.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _43.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _43.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _43.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _43.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _43.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _43.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _43.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _43.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _43.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _43.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _43.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _43.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _43.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _43.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _43.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _43.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _43.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _43.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _43.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _43.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _43.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _43.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _43.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _43.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _43.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _43.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _43.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _43.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _43.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _43.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _43.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgSetWithdrawAddress;
                fromJSON(object: any): _43.MsgSetWithdrawAddress;
                toJSON(message: _43.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_43.MsgSetWithdrawAddress>): _43.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _43.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _43.MsgSetWithdrawAddressResponse;
                toJSON(_: _43.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_43.MsgSetWithdrawAddressResponse>): _43.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _43.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _43.MsgWithdrawDelegatorReward;
                toJSON(message: _43.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_43.MsgWithdrawDelegatorReward>): _43.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _43.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _43.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _43.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_43.MsgWithdrawDelegatorRewardResponse>): _43.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _43.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _43.MsgWithdrawValidatorCommission;
                toJSON(message: _43.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_43.MsgWithdrawValidatorCommission>): _43.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _43.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _43.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _43.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_43.MsgWithdrawValidatorCommissionResponse>): _43.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _43.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgFundCommunityPool;
                fromJSON(object: any): _43.MsgFundCommunityPool;
                toJSON(message: _43.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_43.MsgFundCommunityPool>): _43.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _43.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _43.MsgFundCommunityPoolResponse;
                toJSON(_: _43.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_43.MsgFundCommunityPoolResponse>): _43.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _42.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryParamsRequest;
                fromJSON(_: any): _42.QueryParamsRequest;
                toJSON(_: _42.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_42.QueryParamsRequest>): _42.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _42.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryParamsResponse;
                fromJSON(object: any): _42.QueryParamsResponse;
                toJSON(message: _42.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_42.QueryParamsResponse>): _42.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _42.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _42.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _42.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_42.QueryValidatorOutstandingRewardsRequest>): _42.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _42.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _42.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _42.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_42.QueryValidatorOutstandingRewardsResponse>): _42.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _42.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorCommissionRequest;
                fromJSON(object: any): _42.QueryValidatorCommissionRequest;
                toJSON(message: _42.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_42.QueryValidatorCommissionRequest>): _42.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _42.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorCommissionResponse;
                fromJSON(object: any): _42.QueryValidatorCommissionResponse;
                toJSON(message: _42.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_42.QueryValidatorCommissionResponse>): _42.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _42.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorSlashesRequest;
                fromJSON(object: any): _42.QueryValidatorSlashesRequest;
                toJSON(message: _42.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_42.QueryValidatorSlashesRequest>): _42.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _42.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryValidatorSlashesResponse;
                fromJSON(object: any): _42.QueryValidatorSlashesResponse;
                toJSON(message: _42.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_42.QueryValidatorSlashesResponse>): _42.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _42.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegationRewardsRequest;
                fromJSON(object: any): _42.QueryDelegationRewardsRequest;
                toJSON(message: _42.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_42.QueryDelegationRewardsRequest>): _42.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _42.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegationRewardsResponse;
                fromJSON(object: any): _42.QueryDelegationRewardsResponse;
                toJSON(message: _42.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_42.QueryDelegationRewardsResponse>): _42.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _42.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _42.QueryDelegationTotalRewardsRequest;
                toJSON(message: _42.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_42.QueryDelegationTotalRewardsRequest>): _42.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _42.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _42.QueryDelegationTotalRewardsResponse;
                toJSON(message: _42.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_42.QueryDelegationTotalRewardsResponse>): _42.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _42.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _42.QueryDelegatorValidatorsRequest;
                toJSON(message: _42.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_42.QueryDelegatorValidatorsRequest>): _42.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _42.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _42.QueryDelegatorValidatorsResponse;
                toJSON(message: _42.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_42.QueryDelegatorValidatorsResponse>): _42.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _42.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _42.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _42.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_42.QueryDelegatorWithdrawAddressRequest>): _42.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _42.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _42.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _42.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_42.QueryDelegatorWithdrawAddressResponse>): _42.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _42.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCommunityPoolRequest;
                fromJSON(_: any): _42.QueryCommunityPoolRequest;
                toJSON(_: _42.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_42.QueryCommunityPoolRequest>): _42.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _42.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCommunityPoolResponse;
                fromJSON(object: any): _42.QueryCommunityPoolResponse;
                toJSON(message: _42.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_42.QueryCommunityPoolResponse>): _42.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _41.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DelegatorWithdrawInfo;
                fromJSON(object: any): _41.DelegatorWithdrawInfo;
                toJSON(message: _41.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_41.DelegatorWithdrawInfo>): _41.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _41.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _41.ValidatorOutstandingRewardsRecord;
                toJSON(message: _41.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_41.ValidatorOutstandingRewardsRecord>): _41.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _41.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _41.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _41.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_41.ValidatorAccumulatedCommissionRecord>): _41.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _41.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _41.ValidatorHistoricalRewardsRecord;
                toJSON(message: _41.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_41.ValidatorHistoricalRewardsRecord>): _41.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _41.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _41.ValidatorCurrentRewardsRecord;
                toJSON(message: _41.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_41.ValidatorCurrentRewardsRecord>): _41.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _41.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DelegatorStartingInfoRecord;
                fromJSON(object: any): _41.DelegatorStartingInfoRecord;
                toJSON(message: _41.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_41.DelegatorStartingInfoRecord>): _41.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _41.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValidatorSlashEventRecord;
                fromJSON(object: any): _41.ValidatorSlashEventRecord;
                toJSON(message: _41.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_41.ValidatorSlashEventRecord>): _41.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _41.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GenesisState;
                fromJSON(object: any): _41.GenesisState;
                toJSON(message: _41.GenesisState): unknown;
                fromPartial(object: Partial<_41.GenesisState>): _41.GenesisState;
            };
            Params: {
                encode(message: _40.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Params;
                fromJSON(object: any): _40.Params;
                toJSON(message: _40.Params): unknown;
                fromPartial(object: Partial<_40.Params>): _40.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _40.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorHistoricalRewards;
                fromJSON(object: any): _40.ValidatorHistoricalRewards;
                toJSON(message: _40.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_40.ValidatorHistoricalRewards>): _40.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _40.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorCurrentRewards;
                fromJSON(object: any): _40.ValidatorCurrentRewards;
                toJSON(message: _40.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_40.ValidatorCurrentRewards>): _40.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _40.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorAccumulatedCommission;
                fromJSON(object: any): _40.ValidatorAccumulatedCommission;
                toJSON(message: _40.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_40.ValidatorAccumulatedCommission>): _40.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _40.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorOutstandingRewards;
                fromJSON(object: any): _40.ValidatorOutstandingRewards;
                toJSON(message: _40.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_40.ValidatorOutstandingRewards>): _40.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _40.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorSlashEvent;
                fromJSON(object: any): _40.ValidatorSlashEvent;
                toJSON(message: _40.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_40.ValidatorSlashEvent>): _40.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _40.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorSlashEvents;
                fromJSON(object: any): _40.ValidatorSlashEvents;
                toJSON(message: _40.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_40.ValidatorSlashEvents>): _40.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _40.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.FeePool;
                fromJSON(object: any): _40.FeePool;
                toJSON(message: _40.FeePool): unknown;
                fromPartial(object: Partial<_40.FeePool>): _40.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _40.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.CommunityPoolSpendProposal;
                fromJSON(object: any): _40.CommunityPoolSpendProposal;
                toJSON(message: _40.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_40.CommunityPoolSpendProposal>): _40.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _40.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegatorStartingInfo;
                fromJSON(object: any): _40.DelegatorStartingInfo;
                toJSON(message: _40.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_40.DelegatorStartingInfo>): _40.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _40.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegationDelegatorReward;
                fromJSON(object: any): _40.DelegationDelegatorReward;
                toJSON(message: _40.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_40.DelegationDelegatorReward>): _40.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _40.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _40.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _40.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_40.CommunityPoolSpendProposalWithDeposit>): _40.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _166.MsgClientImpl;
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _46.QueryEvidenceRequest): Promise<_46.QueryEvidenceResponse>;
                allEvidence(request?: _46.QueryAllEvidenceRequest): Promise<_46.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _47.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _47.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _47.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _47.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _47.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _47.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _47.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _47.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _47.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _47.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSubmitEvidence;
                fromJSON(object: any): _47.MsgSubmitEvidence;
                toJSON(message: _47.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_47.MsgSubmitEvidence>): _47.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _47.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _47.MsgSubmitEvidenceResponse;
                toJSON(message: _47.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_47.MsgSubmitEvidenceResponse>): _47.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _46.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryEvidenceRequest;
                fromJSON(object: any): _46.QueryEvidenceRequest;
                toJSON(message: _46.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_46.QueryEvidenceRequest>): _46.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _46.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryEvidenceResponse;
                fromJSON(object: any): _46.QueryEvidenceResponse;
                toJSON(message: _46.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_46.QueryEvidenceResponse>): _46.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _46.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryAllEvidenceRequest;
                fromJSON(object: any): _46.QueryAllEvidenceRequest;
                toJSON(message: _46.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_46.QueryAllEvidenceRequest>): _46.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _46.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryAllEvidenceResponse;
                fromJSON(object: any): _46.QueryAllEvidenceResponse;
                toJSON(message: _46.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_46.QueryAllEvidenceResponse>): _46.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromJSON(object: any): _45.GenesisState;
                toJSON(message: _45.GenesisState): unknown;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
            };
            Equivocation: {
                encode(message: _44.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Equivocation;
                fromJSON(object: any): _44.Equivocation;
                toJSON(message: _44.Equivocation): unknown;
                fromPartial(object: Partial<_44.Equivocation>): _44.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _167.MsgClientImpl;
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _50.QueryAllowanceRequest): Promise<_50.QueryAllowanceResponse>;
                allowances(request: _50.QueryAllowancesRequest): Promise<_50.QueryAllowancesResponse>;
                allowancesByGranter(request: _50.QueryAllowancesByGranterRequest): Promise<_50.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _51.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _51.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _51.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _51.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _51.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _51.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _51.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _51.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _51.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _51.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _51.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _51.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _51.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _51.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _51.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _51.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _51.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _51.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _51.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgGrantAllowance;
                fromJSON(object: any): _51.MsgGrantAllowance;
                toJSON(message: _51.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_51.MsgGrantAllowance>): _51.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _51.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgGrantAllowanceResponse;
                fromJSON(_: any): _51.MsgGrantAllowanceResponse;
                toJSON(_: _51.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_51.MsgGrantAllowanceResponse>): _51.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _51.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgRevokeAllowance;
                fromJSON(object: any): _51.MsgRevokeAllowance;
                toJSON(message: _51.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_51.MsgRevokeAllowance>): _51.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _51.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _51.MsgRevokeAllowanceResponse;
                toJSON(_: _51.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_51.MsgRevokeAllowanceResponse>): _51.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _50.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowanceRequest;
                fromJSON(object: any): _50.QueryAllowanceRequest;
                toJSON(message: _50.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_50.QueryAllowanceRequest>): _50.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _50.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowanceResponse;
                fromJSON(object: any): _50.QueryAllowanceResponse;
                toJSON(message: _50.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_50.QueryAllowanceResponse>): _50.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _50.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowancesRequest;
                fromJSON(object: any): _50.QueryAllowancesRequest;
                toJSON(message: _50.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_50.QueryAllowancesRequest>): _50.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _50.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowancesResponse;
                fromJSON(object: any): _50.QueryAllowancesResponse;
                toJSON(message: _50.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_50.QueryAllowancesResponse>): _50.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _50.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _50.QueryAllowancesByGranterRequest;
                toJSON(message: _50.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_50.QueryAllowancesByGranterRequest>): _50.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _50.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _50.QueryAllowancesByGranterResponse;
                toJSON(message: _50.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_50.QueryAllowancesByGranterResponse>): _50.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenesisState;
                fromJSON(object: any): _49.GenesisState;
                toJSON(message: _49.GenesisState): unknown;
                fromPartial(object: Partial<_49.GenesisState>): _49.GenesisState;
            };
            BasicAllowance: {
                encode(message: _48.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.BasicAllowance;
                fromJSON(object: any): _48.BasicAllowance;
                toJSON(message: _48.BasicAllowance): unknown;
                fromPartial(object: Partial<_48.BasicAllowance>): _48.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _48.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PeriodicAllowance;
                fromJSON(object: any): _48.PeriodicAllowance;
                toJSON(message: _48.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_48.PeriodicAllowance>): _48.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _48.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AllowedMsgAllowance;
                fromJSON(object: any): _48.AllowedMsgAllowance;
                toJSON(message: _48.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_48.AllowedMsgAllowance>): _48.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _48.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Grant;
                fromJSON(object: any): _48.Grant;
                toJSON(message: _48.Grant): unknown;
                fromPartial(object: Partial<_48.Grant>): _48.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
                fromJSON(object: any): _52.GenesisState;
                toJSON(message: _52.GenesisState): unknown;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _55.QueryProposalRequest): Promise<_55.QueryProposalResponse>;
                proposals(request: _55.QueryProposalsRequest): Promise<_55.QueryProposalsResponse>;
                vote(request: _55.QueryVoteRequest): Promise<_55.QueryVoteResponse>;
                votes(request: _55.QueryVotesRequest): Promise<_55.QueryVotesResponse>;
                params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                deposit(request: _55.QueryDepositRequest): Promise<_55.QueryDepositResponse>;
                deposits(request: _55.QueryDepositsRequest): Promise<_55.QueryDepositsResponse>;
                tallyResult(request: _55.QueryTallyResultRequest): Promise<_55.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _56.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _56.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _56.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _56.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _56.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _56.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _56.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _56.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _56.MsgExecLegacyContent;
                    };
                    vote(value: _56.MsgVote): {
                        typeUrl: string;
                        value: _56.MsgVote;
                    };
                    voteWeighted(value: _56.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _56.MsgVoteWeighted;
                    };
                    deposit(value: _56.MsgDeposit): {
                        typeUrl: string;
                        value: _56.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _56.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _56.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _56.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _56.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _56.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _56.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _56.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _56.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _56.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _56.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _56.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _56.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _56.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _56.MsgExecLegacyContent;
                    };
                    vote(value: _56.MsgVote): {
                        typeUrl: string;
                        value: _56.MsgVote;
                    };
                    voteWeighted(value: _56.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _56.MsgVoteWeighted;
                    };
                    deposit(value: _56.MsgDeposit): {
                        typeUrl: string;
                        value: _56.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _56.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _56.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _56.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _56.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _56.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _56.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _56.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _56.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _56.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _56.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _56.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSubmitProposal;
                fromJSON(object: any): _56.MsgSubmitProposal;
                toJSON(message: _56.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_56.MsgSubmitProposal>): _56.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _56.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSubmitProposalResponse;
                fromJSON(object: any): _56.MsgSubmitProposalResponse;
                toJSON(message: _56.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_56.MsgSubmitProposalResponse>): _56.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _56.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgExecLegacyContent;
                fromJSON(object: any): _56.MsgExecLegacyContent;
                toJSON(message: _56.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_56.MsgExecLegacyContent>): _56.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _56.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgExecLegacyContentResponse;
                fromJSON(_: any): _56.MsgExecLegacyContentResponse;
                toJSON(_: _56.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_56.MsgExecLegacyContentResponse>): _56.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _56.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgVote;
                fromJSON(object: any): _56.MsgVote;
                toJSON(message: _56.MsgVote): unknown;
                fromPartial(object: Partial<_56.MsgVote>): _56.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _56.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgVoteResponse;
                fromJSON(_: any): _56.MsgVoteResponse;
                toJSON(_: _56.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_56.MsgVoteResponse>): _56.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _56.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgVoteWeighted;
                fromJSON(object: any): _56.MsgVoteWeighted;
                toJSON(message: _56.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_56.MsgVoteWeighted>): _56.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _56.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgVoteWeightedResponse;
                fromJSON(_: any): _56.MsgVoteWeightedResponse;
                toJSON(_: _56.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_56.MsgVoteWeightedResponse>): _56.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _56.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgDeposit;
                fromJSON(object: any): _56.MsgDeposit;
                toJSON(message: _56.MsgDeposit): unknown;
                fromPartial(object: Partial<_56.MsgDeposit>): _56.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _56.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgDepositResponse;
                fromJSON(_: any): _56.MsgDepositResponse;
                toJSON(_: _56.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_56.MsgDepositResponse>): _56.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _55.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryProposalRequest;
                fromJSON(object: any): _55.QueryProposalRequest;
                toJSON(message: _55.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_55.QueryProposalRequest>): _55.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _55.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryProposalResponse;
                fromJSON(object: any): _55.QueryProposalResponse;
                toJSON(message: _55.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_55.QueryProposalResponse>): _55.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _55.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryProposalsRequest;
                fromJSON(object: any): _55.QueryProposalsRequest;
                toJSON(message: _55.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_55.QueryProposalsRequest>): _55.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _55.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryProposalsResponse;
                fromJSON(object: any): _55.QueryProposalsResponse;
                toJSON(message: _55.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_55.QueryProposalsResponse>): _55.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _55.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryVoteRequest;
                fromJSON(object: any): _55.QueryVoteRequest;
                toJSON(message: _55.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_55.QueryVoteRequest>): _55.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _55.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryVoteResponse;
                fromJSON(object: any): _55.QueryVoteResponse;
                toJSON(message: _55.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_55.QueryVoteResponse>): _55.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _55.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryVotesRequest;
                fromJSON(object: any): _55.QueryVotesRequest;
                toJSON(message: _55.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_55.QueryVotesRequest>): _55.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _55.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryVotesResponse;
                fromJSON(object: any): _55.QueryVotesResponse;
                toJSON(message: _55.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_55.QueryVotesResponse>): _55.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _55.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsRequest;
                fromJSON(object: any): _55.QueryParamsRequest;
                toJSON(message: _55.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _55.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsResponse;
                fromJSON(object: any): _55.QueryParamsResponse;
                toJSON(message: _55.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _55.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDepositRequest;
                fromJSON(object: any): _55.QueryDepositRequest;
                toJSON(message: _55.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_55.QueryDepositRequest>): _55.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _55.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDepositResponse;
                fromJSON(object: any): _55.QueryDepositResponse;
                toJSON(message: _55.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_55.QueryDepositResponse>): _55.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _55.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDepositsRequest;
                fromJSON(object: any): _55.QueryDepositsRequest;
                toJSON(message: _55.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_55.QueryDepositsRequest>): _55.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _55.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDepositsResponse;
                fromJSON(object: any): _55.QueryDepositsResponse;
                toJSON(message: _55.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_55.QueryDepositsResponse>): _55.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _55.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryTallyResultRequest;
                fromJSON(object: any): _55.QueryTallyResultRequest;
                toJSON(message: _55.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_55.QueryTallyResultRequest>): _55.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _55.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryTallyResultResponse;
                fromJSON(object: any): _55.QueryTallyResultResponse;
                toJSON(message: _55.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_55.QueryTallyResultResponse>): _55.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _54.VoteOption;
            voteOptionToJSON(object: _54.VoteOption): string;
            proposalStatusFromJSON(object: any): _54.ProposalStatus;
            proposalStatusToJSON(object: _54.ProposalStatus): string;
            VoteOption: typeof _54.VoteOption;
            VoteOptionSDKType: typeof _54.VoteOptionSDKType;
            ProposalStatus: typeof _54.ProposalStatus;
            ProposalStatusSDKType: typeof _54.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _54.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.WeightedVoteOption;
                fromJSON(object: any): _54.WeightedVoteOption;
                toJSON(message: _54.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_54.WeightedVoteOption>): _54.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _54.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Deposit;
                fromJSON(object: any): _54.Deposit;
                toJSON(message: _54.Deposit): unknown;
                fromPartial(object: Partial<_54.Deposit>): _54.Deposit;
            };
            Proposal: {
                encode(message: _54.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Proposal;
                fromJSON(object: any): _54.Proposal;
                toJSON(message: _54.Proposal): unknown;
                fromPartial(object: Partial<_54.Proposal>): _54.Proposal;
            };
            TallyResult: {
                encode(message: _54.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TallyResult;
                fromJSON(object: any): _54.TallyResult;
                toJSON(message: _54.TallyResult): unknown;
                fromPartial(object: Partial<_54.TallyResult>): _54.TallyResult;
            };
            Vote: {
                encode(message: _54.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Vote;
                fromJSON(object: any): _54.Vote;
                toJSON(message: _54.Vote): unknown;
                fromPartial(object: Partial<_54.Vote>): _54.Vote;
            };
            DepositParams: {
                encode(message: _54.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.DepositParams;
                fromJSON(object: any): _54.DepositParams;
                toJSON(message: _54.DepositParams): unknown;
                fromPartial(object: Partial<_54.DepositParams>): _54.DepositParams;
            };
            VotingParams: {
                encode(message: _54.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.VotingParams;
                fromJSON(object: any): _54.VotingParams;
                toJSON(message: _54.VotingParams): unknown;
                fromPartial(object: Partial<_54.VotingParams>): _54.VotingParams;
            };
            TallyParams: {
                encode(message: _54.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TallyParams;
                fromJSON(object: any): _54.TallyParams;
                toJSON(message: _54.TallyParams): unknown;
                fromPartial(object: Partial<_54.TallyParams>): _54.TallyParams;
            };
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GenesisState;
                fromJSON(object: any): _53.GenesisState;
                toJSON(message: _53.GenesisState): unknown;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _59.QueryProposalRequest): Promise<_59.QueryProposalResponse>;
                proposals(request: _59.QueryProposalsRequest): Promise<_59.QueryProposalsResponse>;
                vote(request: _59.QueryVoteRequest): Promise<_59.QueryVoteResponse>;
                votes(request: _59.QueryVotesRequest): Promise<_59.QueryVotesResponse>;
                params(request: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                deposit(request: _59.QueryDepositRequest): Promise<_59.QueryDepositResponse>;
                deposits(request: _59.QueryDepositsRequest): Promise<_59.QueryDepositsResponse>;
                tallyResult(request: _59.QueryTallyResultRequest): Promise<_59.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _60.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _60.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _60.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _60.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _60.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _60.MsgSubmitProposal;
                    };
                    vote(value: _60.MsgVote): {
                        typeUrl: string;
                        value: _60.MsgVote;
                    };
                    voteWeighted(value: _60.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _60.MsgVoteWeighted;
                    };
                    deposit(value: _60.MsgDeposit): {
                        typeUrl: string;
                        value: _60.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _60.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _60.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _60.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _60.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _60.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _60.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _60.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _60.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _60.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _60.MsgSubmitProposal;
                    };
                    vote(value: _60.MsgVote): {
                        typeUrl: string;
                        value: _60.MsgVote;
                    };
                    voteWeighted(value: _60.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _60.MsgVoteWeighted;
                    };
                    deposit(value: _60.MsgDeposit): {
                        typeUrl: string;
                        value: _60.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _60.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _60.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _60.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _60.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _60.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _60.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _60.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _60.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _60.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSubmitProposal;
                fromJSON(object: any): _60.MsgSubmitProposal;
                toJSON(message: _60.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_60.MsgSubmitProposal>): _60.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _60.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSubmitProposalResponse;
                fromJSON(object: any): _60.MsgSubmitProposalResponse;
                toJSON(message: _60.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_60.MsgSubmitProposalResponse>): _60.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _60.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgVote;
                fromJSON(object: any): _60.MsgVote;
                toJSON(message: _60.MsgVote): unknown;
                fromPartial(object: Partial<_60.MsgVote>): _60.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _60.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgVoteResponse;
                fromJSON(_: any): _60.MsgVoteResponse;
                toJSON(_: _60.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_60.MsgVoteResponse>): _60.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _60.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgVoteWeighted;
                fromJSON(object: any): _60.MsgVoteWeighted;
                toJSON(message: _60.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_60.MsgVoteWeighted>): _60.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _60.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgVoteWeightedResponse;
                fromJSON(_: any): _60.MsgVoteWeightedResponse;
                toJSON(_: _60.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_60.MsgVoteWeightedResponse>): _60.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _60.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgDeposit;
                fromJSON(object: any): _60.MsgDeposit;
                toJSON(message: _60.MsgDeposit): unknown;
                fromPartial(object: Partial<_60.MsgDeposit>): _60.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _60.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgDepositResponse;
                fromJSON(_: any): _60.MsgDepositResponse;
                toJSON(_: _60.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_60.MsgDepositResponse>): _60.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _59.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryProposalRequest;
                fromJSON(object: any): _59.QueryProposalRequest;
                toJSON(message: _59.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_59.QueryProposalRequest>): _59.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _59.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryProposalResponse;
                fromJSON(object: any): _59.QueryProposalResponse;
                toJSON(message: _59.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_59.QueryProposalResponse>): _59.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _59.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryProposalsRequest;
                fromJSON(object: any): _59.QueryProposalsRequest;
                toJSON(message: _59.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_59.QueryProposalsRequest>): _59.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _59.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryProposalsResponse;
                fromJSON(object: any): _59.QueryProposalsResponse;
                toJSON(message: _59.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_59.QueryProposalsResponse>): _59.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _59.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryVoteRequest;
                fromJSON(object: any): _59.QueryVoteRequest;
                toJSON(message: _59.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_59.QueryVoteRequest>): _59.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _59.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryVoteResponse;
                fromJSON(object: any): _59.QueryVoteResponse;
                toJSON(message: _59.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_59.QueryVoteResponse>): _59.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _59.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryVotesRequest;
                fromJSON(object: any): _59.QueryVotesRequest;
                toJSON(message: _59.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_59.QueryVotesRequest>): _59.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _59.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryVotesResponse;
                fromJSON(object: any): _59.QueryVotesResponse;
                toJSON(message: _59.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_59.QueryVotesResponse>): _59.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _59.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsRequest;
                fromJSON(object: any): _59.QueryParamsRequest;
                toJSON(message: _59.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_59.QueryParamsRequest>): _59.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _59.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsResponse;
                fromJSON(object: any): _59.QueryParamsResponse;
                toJSON(message: _59.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_59.QueryParamsResponse>): _59.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _59.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDepositRequest;
                fromJSON(object: any): _59.QueryDepositRequest;
                toJSON(message: _59.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_59.QueryDepositRequest>): _59.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _59.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDepositResponse;
                fromJSON(object: any): _59.QueryDepositResponse;
                toJSON(message: _59.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_59.QueryDepositResponse>): _59.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _59.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDepositsRequest;
                fromJSON(object: any): _59.QueryDepositsRequest;
                toJSON(message: _59.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_59.QueryDepositsRequest>): _59.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _59.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDepositsResponse;
                fromJSON(object: any): _59.QueryDepositsResponse;
                toJSON(message: _59.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_59.QueryDepositsResponse>): _59.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _59.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryTallyResultRequest;
                fromJSON(object: any): _59.QueryTallyResultRequest;
                toJSON(message: _59.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_59.QueryTallyResultRequest>): _59.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _59.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryTallyResultResponse;
                fromJSON(object: any): _59.QueryTallyResultResponse;
                toJSON(message: _59.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_59.QueryTallyResultResponse>): _59.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _58.VoteOption;
            voteOptionToJSON(object: _58.VoteOption): string;
            proposalStatusFromJSON(object: any): _58.ProposalStatus;
            proposalStatusToJSON(object: _58.ProposalStatus): string;
            VoteOption: typeof _58.VoteOption;
            VoteOptionSDKType: typeof _58.VoteOptionSDKType;
            ProposalStatus: typeof _58.ProposalStatus;
            ProposalStatusSDKType: typeof _58.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _58.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.WeightedVoteOption;
                fromJSON(object: any): _58.WeightedVoteOption;
                toJSON(message: _58.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_58.WeightedVoteOption>): _58.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _58.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.TextProposal;
                fromJSON(object: any): _58.TextProposal;
                toJSON(message: _58.TextProposal): unknown;
                fromPartial(object: Partial<_58.TextProposal>): _58.TextProposal;
            };
            Deposit: {
                encode(message: _58.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Deposit;
                fromJSON(object: any): _58.Deposit;
                toJSON(message: _58.Deposit): unknown;
                fromPartial(object: Partial<_58.Deposit>): _58.Deposit;
            };
            Proposal: {
                encode(message: _58.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Proposal;
                fromJSON(object: any): _58.Proposal;
                toJSON(message: _58.Proposal): unknown;
                fromPartial(object: Partial<_58.Proposal>): _58.Proposal;
            };
            TallyResult: {
                encode(message: _58.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.TallyResult;
                fromJSON(object: any): _58.TallyResult;
                toJSON(message: _58.TallyResult): unknown;
                fromPartial(object: Partial<_58.TallyResult>): _58.TallyResult;
            };
            Vote: {
                encode(message: _58.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Vote;
                fromJSON(object: any): _58.Vote;
                toJSON(message: _58.Vote): unknown;
                fromPartial(object: Partial<_58.Vote>): _58.Vote;
            };
            DepositParams: {
                encode(message: _58.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.DepositParams;
                fromJSON(object: any): _58.DepositParams;
                toJSON(message: _58.DepositParams): unknown;
                fromPartial(object: Partial<_58.DepositParams>): _58.DepositParams;
            };
            VotingParams: {
                encode(message: _58.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.VotingParams;
                fromJSON(object: any): _58.VotingParams;
                toJSON(message: _58.VotingParams): unknown;
                fromPartial(object: Partial<_58.VotingParams>): _58.VotingParams;
            };
            TallyParams: {
                encode(message: _58.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.TallyParams;
                fromJSON(object: any): _58.TallyParams;
                toJSON(message: _58.TallyParams): unknown;
                fromPartial(object: Partial<_58.TallyParams>): _58.TallyParams;
            };
            GenesisState: {
                encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GenesisState;
                fromJSON(object: any): _57.GenesisState;
                toJSON(message: _57.GenesisState): unknown;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _63.QueryGroupInfoRequest): Promise<_63.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _63.QueryGroupPolicyInfoRequest): Promise<_63.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _63.QueryGroupMembersRequest): Promise<_63.QueryGroupMembersResponse>;
                groupsByAdmin(request: _63.QueryGroupsByAdminRequest): Promise<_63.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _63.QueryGroupPoliciesByGroupRequest): Promise<_63.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _63.QueryGroupPoliciesByAdminRequest): Promise<_63.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _63.QueryProposalRequest): Promise<_63.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _63.QueryProposalsByGroupPolicyRequest): Promise<_63.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _63.QueryVoteByProposalVoterRequest): Promise<_63.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _63.QueryVotesByProposalRequest): Promise<_63.QueryVotesByProposalResponse>;
                votesByVoter(request: _63.QueryVotesByVoterRequest): Promise<_63.QueryVotesByVoterResponse>;
                groupsByMember(request: _63.QueryGroupsByMemberRequest): Promise<_63.QueryGroupsByMemberResponse>;
                tallyResult(request: _63.QueryTallyResultRequest): Promise<_63.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _64.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _64.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _64.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _64.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _64.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _64.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _64.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _64.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _64.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _64.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _64.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _64.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _64.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _64.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _64.MsgCreateGroup): {
                        typeUrl: string;
                        value: _64.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _64.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _64.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _64.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _64.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _64.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _64.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _64.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _64.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _64.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _64.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _64.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _64.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _64.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _64.MsgWithdrawProposal;
                    };
                    vote(value: _64.MsgVote): {
                        typeUrl: string;
                        value: _64.MsgVote;
                    };
                    exec(value: _64.MsgExec): {
                        typeUrl: string;
                        value: _64.MsgExec;
                    };
                    leaveGroup(value: _64.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _64.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _64.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _64.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _64.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _64.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _64.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _64.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _64.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _64.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _64.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _64.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _64.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _64.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _64.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _64.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _64.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _64.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _64.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _64.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _64.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _64.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _64.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _64.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _64.MsgCreateGroup): {
                        typeUrl: string;
                        value: _64.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _64.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _64.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _64.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _64.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _64.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _64.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _64.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _64.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _64.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _64.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _64.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _64.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _64.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _64.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _64.MsgWithdrawProposal;
                    };
                    vote(value: _64.MsgVote): {
                        typeUrl: string;
                        value: _64.MsgVote;
                    };
                    exec(value: _64.MsgExec): {
                        typeUrl: string;
                        value: _64.MsgExec;
                    };
                    leaveGroup(value: _64.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _64.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _64.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _64.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _64.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _64.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _64.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _64.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _64.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _64.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _64.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _64.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _64.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _64.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _64.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _64.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _64.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _64.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _64.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _64.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _64.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _64.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _64.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _64.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _64.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _64.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _64.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _64.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _64.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _64.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _65.VoteOption;
            voteOptionToJSON(object: _65.VoteOption): string;
            proposalStatusFromJSON(object: any): _65.ProposalStatus;
            proposalStatusToJSON(object: _65.ProposalStatus): string;
            proposalResultFromJSON(object: any): _65.ProposalResult;
            proposalResultToJSON(object: _65.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _65.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _65.ProposalExecutorResult): string;
            VoteOption: typeof _65.VoteOption;
            VoteOptionSDKType: typeof _65.VoteOptionSDKType;
            ProposalStatus: typeof _65.ProposalStatus;
            ProposalStatusSDKType: typeof _65.ProposalStatusSDKType;
            ProposalResult: typeof _65.ProposalResult;
            ProposalResultSDKType: typeof _65.ProposalResultSDKType;
            ProposalExecutorResult: typeof _65.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _65.ProposalExecutorResultSDKType;
            Member: {
                encode(message: _65.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Member;
                fromJSON(object: any): _65.Member;
                toJSON(message: _65.Member): unknown;
                fromPartial(object: Partial<_65.Member>): _65.Member;
            };
            Members: {
                encode(message: _65.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Members;
                fromJSON(object: any): _65.Members;
                toJSON(message: _65.Members): unknown;
                fromPartial(object: Partial<_65.Members>): _65.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _65.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ThresholdDecisionPolicy;
                fromJSON(object: any): _65.ThresholdDecisionPolicy;
                toJSON(message: _65.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_65.ThresholdDecisionPolicy>): _65.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _65.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.PercentageDecisionPolicy;
                fromJSON(object: any): _65.PercentageDecisionPolicy;
                toJSON(message: _65.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_65.PercentageDecisionPolicy>): _65.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _65.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.DecisionPolicyWindows;
                fromJSON(object: any): _65.DecisionPolicyWindows;
                toJSON(message: _65.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_65.DecisionPolicyWindows>): _65.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _65.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GroupInfo;
                fromJSON(object: any): _65.GroupInfo;
                toJSON(message: _65.GroupInfo): unknown;
                fromPartial(object: Partial<_65.GroupInfo>): _65.GroupInfo;
            };
            GroupMember: {
                encode(message: _65.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GroupMember;
                fromJSON(object: any): _65.GroupMember;
                toJSON(message: _65.GroupMember): unknown;
                fromPartial(object: Partial<_65.GroupMember>): _65.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _65.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GroupPolicyInfo;
                fromJSON(object: any): _65.GroupPolicyInfo;
                toJSON(message: _65.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_65.GroupPolicyInfo>): _65.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _65.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Proposal;
                fromJSON(object: any): _65.Proposal;
                toJSON(message: _65.Proposal): unknown;
                fromPartial(object: Partial<_65.Proposal>): _65.Proposal;
            };
            TallyResult: {
                encode(message: _65.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.TallyResult;
                fromJSON(object: any): _65.TallyResult;
                toJSON(message: _65.TallyResult): unknown;
                fromPartial(object: Partial<_65.TallyResult>): _65.TallyResult;
            };
            Vote: {
                encode(message: _65.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Vote;
                fromJSON(object: any): _65.Vote;
                toJSON(message: _65.Vote): unknown;
                fromPartial(object: Partial<_65.Vote>): _65.Vote;
            };
            execFromJSON(object: any): _64.Exec;
            execToJSON(object: _64.Exec): string;
            Exec: typeof _64.Exec;
            ExecSDKType: typeof _64.ExecSDKType;
            MsgCreateGroup: {
                encode(message: _64.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateGroup;
                fromJSON(object: any): _64.MsgCreateGroup;
                toJSON(message: _64.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_64.MsgCreateGroup>): _64.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _64.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateGroupResponse;
                fromJSON(object: any): _64.MsgCreateGroupResponse;
                toJSON(message: _64.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_64.MsgCreateGroupResponse>): _64.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _64.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupMembers;
                fromJSON(object: any): _64.MsgUpdateGroupMembers;
                toJSON(message: _64.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_64.MsgUpdateGroupMembers>): _64.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _64.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _64.MsgUpdateGroupMembersResponse;
                toJSON(_: _64.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_64.MsgUpdateGroupMembersResponse>): _64.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _64.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupAdmin;
                fromJSON(object: any): _64.MsgUpdateGroupAdmin;
                toJSON(message: _64.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_64.MsgUpdateGroupAdmin>): _64.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _64.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _64.MsgUpdateGroupAdminResponse;
                toJSON(_: _64.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_64.MsgUpdateGroupAdminResponse>): _64.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _64.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupMetadata;
                fromJSON(object: any): _64.MsgUpdateGroupMetadata;
                toJSON(message: _64.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_64.MsgUpdateGroupMetadata>): _64.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _64.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _64.MsgUpdateGroupMetadataResponse;
                toJSON(_: _64.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_64.MsgUpdateGroupMetadataResponse>): _64.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _64.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateGroupPolicy;
                fromJSON(object: any): _64.MsgCreateGroupPolicy;
                toJSON(message: _64.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_64.MsgCreateGroupPolicy>): _64.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _64.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _64.MsgCreateGroupPolicyResponse;
                toJSON(message: _64.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_64.MsgCreateGroupPolicyResponse>): _64.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _64.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _64.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _64.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_64.MsgUpdateGroupPolicyAdmin>): _64.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _64.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _64.MsgCreateGroupWithPolicy;
                toJSON(message: _64.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_64.MsgCreateGroupWithPolicy>): _64.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _64.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _64.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _64.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_64.MsgCreateGroupWithPolicyResponse>): _64.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _64.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _64.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _64.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_64.MsgUpdateGroupPolicyAdminResponse>): _64.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _64.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _64.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _64.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_64.MsgUpdateGroupPolicyDecisionPolicy>): _64.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _64.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _64.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _64.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_64.MsgUpdateGroupPolicyDecisionPolicyResponse>): _64.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _64.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _64.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _64.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_64.MsgUpdateGroupPolicyMetadata>): _64.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _64.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _64.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _64.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_64.MsgUpdateGroupPolicyMetadataResponse>): _64.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _64.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgSubmitProposal;
                fromJSON(object: any): _64.MsgSubmitProposal;
                toJSON(message: _64.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_64.MsgSubmitProposal>): _64.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _64.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgSubmitProposalResponse;
                fromJSON(object: any): _64.MsgSubmitProposalResponse;
                toJSON(message: _64.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_64.MsgSubmitProposalResponse>): _64.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _64.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgWithdrawProposal;
                fromJSON(object: any): _64.MsgWithdrawProposal;
                toJSON(message: _64.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_64.MsgWithdrawProposal>): _64.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _64.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgWithdrawProposalResponse;
                fromJSON(_: any): _64.MsgWithdrawProposalResponse;
                toJSON(_: _64.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_64.MsgWithdrawProposalResponse>): _64.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _64.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgVote;
                fromJSON(object: any): _64.MsgVote;
                toJSON(message: _64.MsgVote): unknown;
                fromPartial(object: Partial<_64.MsgVote>): _64.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _64.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgVoteResponse;
                fromJSON(_: any): _64.MsgVoteResponse;
                toJSON(_: _64.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_64.MsgVoteResponse>): _64.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _64.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgExec;
                fromJSON(object: any): _64.MsgExec;
                toJSON(message: _64.MsgExec): unknown;
                fromPartial(object: Partial<_64.MsgExec>): _64.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _64.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgExecResponse;
                fromJSON(_: any): _64.MsgExecResponse;
                toJSON(_: _64.MsgExecResponse): unknown;
                fromPartial(_: Partial<_64.MsgExecResponse>): _64.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _64.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgLeaveGroup;
                fromJSON(object: any): _64.MsgLeaveGroup;
                toJSON(message: _64.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_64.MsgLeaveGroup>): _64.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _64.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgLeaveGroupResponse;
                fromJSON(_: any): _64.MsgLeaveGroupResponse;
                toJSON(_: _64.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_64.MsgLeaveGroupResponse>): _64.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _63.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupInfoRequest;
                fromJSON(object: any): _63.QueryGroupInfoRequest;
                toJSON(message: _63.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_63.QueryGroupInfoRequest>): _63.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _63.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupInfoResponse;
                fromJSON(object: any): _63.QueryGroupInfoResponse;
                toJSON(message: _63.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_63.QueryGroupInfoResponse>): _63.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _63.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _63.QueryGroupPolicyInfoRequest;
                toJSON(message: _63.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_63.QueryGroupPolicyInfoRequest>): _63.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _63.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _63.QueryGroupPolicyInfoResponse;
                toJSON(message: _63.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_63.QueryGroupPolicyInfoResponse>): _63.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _63.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupMembersRequest;
                fromJSON(object: any): _63.QueryGroupMembersRequest;
                toJSON(message: _63.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_63.QueryGroupMembersRequest>): _63.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _63.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupMembersResponse;
                fromJSON(object: any): _63.QueryGroupMembersResponse;
                toJSON(message: _63.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_63.QueryGroupMembersResponse>): _63.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _63.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupsByAdminRequest;
                fromJSON(object: any): _63.QueryGroupsByAdminRequest;
                toJSON(message: _63.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_63.QueryGroupsByAdminRequest>): _63.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _63.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupsByAdminResponse;
                fromJSON(object: any): _63.QueryGroupsByAdminResponse;
                toJSON(message: _63.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_63.QueryGroupsByAdminResponse>): _63.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _63.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _63.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _63.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_63.QueryGroupPoliciesByGroupRequest>): _63.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _63.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _63.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _63.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_63.QueryGroupPoliciesByGroupResponse>): _63.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _63.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _63.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _63.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_63.QueryGroupPoliciesByAdminRequest>): _63.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _63.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _63.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _63.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_63.QueryGroupPoliciesByAdminResponse>): _63.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _63.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryProposalRequest;
                fromJSON(object: any): _63.QueryProposalRequest;
                toJSON(message: _63.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_63.QueryProposalRequest>): _63.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _63.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryProposalResponse;
                fromJSON(object: any): _63.QueryProposalResponse;
                toJSON(message: _63.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_63.QueryProposalResponse>): _63.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _63.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _63.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _63.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_63.QueryProposalsByGroupPolicyRequest>): _63.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _63.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _63.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _63.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_63.QueryProposalsByGroupPolicyResponse>): _63.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _63.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _63.QueryVoteByProposalVoterRequest;
                toJSON(message: _63.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_63.QueryVoteByProposalVoterRequest>): _63.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _63.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _63.QueryVoteByProposalVoterResponse;
                toJSON(message: _63.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_63.QueryVoteByProposalVoterResponse>): _63.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _63.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVotesByProposalRequest;
                fromJSON(object: any): _63.QueryVotesByProposalRequest;
                toJSON(message: _63.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_63.QueryVotesByProposalRequest>): _63.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _63.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVotesByProposalResponse;
                fromJSON(object: any): _63.QueryVotesByProposalResponse;
                toJSON(message: _63.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_63.QueryVotesByProposalResponse>): _63.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _63.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVotesByVoterRequest;
                fromJSON(object: any): _63.QueryVotesByVoterRequest;
                toJSON(message: _63.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_63.QueryVotesByVoterRequest>): _63.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _63.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVotesByVoterResponse;
                fromJSON(object: any): _63.QueryVotesByVoterResponse;
                toJSON(message: _63.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_63.QueryVotesByVoterResponse>): _63.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _63.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupsByMemberRequest;
                fromJSON(object: any): _63.QueryGroupsByMemberRequest;
                toJSON(message: _63.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_63.QueryGroupsByMemberRequest>): _63.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _63.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryGroupsByMemberResponse;
                fromJSON(object: any): _63.QueryGroupsByMemberResponse;
                toJSON(message: _63.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_63.QueryGroupsByMemberResponse>): _63.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _63.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTallyResultRequest;
                fromJSON(object: any): _63.QueryTallyResultRequest;
                toJSON(message: _63.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_63.QueryTallyResultRequest>): _63.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _63.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTallyResultResponse;
                fromJSON(object: any): _63.QueryTallyResultResponse;
                toJSON(message: _63.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_63.QueryTallyResultResponse>): _63.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                fromJSON(object: any): _62.GenesisState;
                toJSON(message: _62.GenesisState): unknown;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _61.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.EventCreateGroup;
                fromJSON(object: any): _61.EventCreateGroup;
                toJSON(message: _61.EventCreateGroup): unknown;
                fromPartial(object: Partial<_61.EventCreateGroup>): _61.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _61.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.EventUpdateGroup;
                fromJSON(object: any): _61.EventUpdateGroup;
                toJSON(message: _61.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_61.EventUpdateGroup>): _61.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _61.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.EventCreateGroupPolicy;
                fromJSON(object: any): _61.EventCreateGroupPolicy;
                toJSON(message: _61.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_61.EventCreateGroupPolicy>): _61.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _61.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.EventUpdateGroupPolicy;
                fromJSON(object: any): _61.EventUpdateGroupPolicy;
                toJSON(message: _61.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_61.EventUpdateGroupPolicy>): _61.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _61.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.EventSubmitProposal;
                fromJSON(object: any): _61.EventSubmitProposal;
                toJSON(message: _61.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_61.EventSubmitProposal>): _61.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _61.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.EventWithdrawProposal;
                fromJSON(object: any): _61.EventWithdrawProposal;
                toJSON(message: _61.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_61.EventWithdrawProposal>): _61.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _61.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.EventVote;
                fromJSON(object: any): _61.EventVote;
                toJSON(message: _61.EventVote): unknown;
                fromPartial(object: Partial<_61.EventVote>): _61.EventVote;
            };
            EventExec: {
                encode(message: _61.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.EventExec;
                fromJSON(object: any): _61.EventExec;
                toJSON(message: _61.EventExec): unknown;
                fromPartial(object: Partial<_61.EventExec>): _61.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _61.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.EventLeaveGroup;
                fromJSON(object: any): _61.EventLeaveGroup;
                toJSON(message: _61.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_61.EventLeaveGroup>): _61.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                inflation(request?: _68.QueryInflationRequest): Promise<_68.QueryInflationResponse>;
                annualProvisions(request?: _68.QueryAnnualProvisionsRequest): Promise<_68.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _68.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsRequest;
                fromJSON(_: any): _68.QueryParamsRequest;
                toJSON(_: _68.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _68.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsResponse;
                fromJSON(object: any): _68.QueryParamsResponse;
                toJSON(message: _68.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_68.QueryParamsResponse>): _68.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _68.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryInflationRequest;
                fromJSON(_: any): _68.QueryInflationRequest;
                toJSON(_: _68.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_68.QueryInflationRequest>): _68.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _68.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryInflationResponse;
                fromJSON(object: any): _68.QueryInflationResponse;
                toJSON(message: _68.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_68.QueryInflationResponse>): _68.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _68.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _68.QueryAnnualProvisionsRequest;
                toJSON(_: _68.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_68.QueryAnnualProvisionsRequest>): _68.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _68.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _68.QueryAnnualProvisionsResponse;
                toJSON(message: _68.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_68.QueryAnnualProvisionsResponse>): _68.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _67.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Minter;
                fromJSON(object: any): _67.Minter;
                toJSON(message: _67.Minter): unknown;
                fromPartial(object: Partial<_67.Minter>): _67.Minter;
            };
            Params: {
                encode(message: _67.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Params;
                fromJSON(object: any): _67.Params;
                toJSON(message: _67.Params): unknown;
                fromPartial(object: Partial<_67.Params>): _67.Params;
            };
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisState;
                fromJSON(object: any): _66.GenesisState;
                toJSON(message: _66.GenesisState): unknown;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _73.QueryBalanceRequest): Promise<_73.QueryBalanceResponse>;
                owner(request: _73.QueryOwnerRequest): Promise<_73.QueryOwnerResponse>;
                supply(request: _73.QuerySupplyRequest): Promise<_73.QuerySupplyResponse>;
                nFTs(request: _73.QueryNFTsRequest): Promise<_73.QueryNFTsResponse>;
                nFT(request: _73.QueryNFTRequest): Promise<_73.QueryNFTResponse>;
                class(request: _73.QueryClassRequest): Promise<_73.QueryClassResponse>;
                classes(request?: _73.QueryClassesRequest): Promise<_73.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _74.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _74.MsgSend): {
                        typeUrl: string;
                        value: _74.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _74.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _74.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _74.MsgSend): {
                        typeUrl: string;
                        value: _74.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _74.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _74.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _74.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSend;
                fromJSON(object: any): _74.MsgSend;
                toJSON(message: _74.MsgSend): unknown;
                fromPartial(object: Partial<_74.MsgSend>): _74.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _74.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSendResponse;
                fromJSON(_: any): _74.MsgSendResponse;
                toJSON(_: _74.MsgSendResponse): unknown;
                fromPartial(_: Partial<_74.MsgSendResponse>): _74.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _73.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryBalanceRequest;
                fromJSON(object: any): _73.QueryBalanceRequest;
                toJSON(message: _73.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_73.QueryBalanceRequest>): _73.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _73.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryBalanceResponse;
                fromJSON(object: any): _73.QueryBalanceResponse;
                toJSON(message: _73.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_73.QueryBalanceResponse>): _73.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _73.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryOwnerRequest;
                fromJSON(object: any): _73.QueryOwnerRequest;
                toJSON(message: _73.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_73.QueryOwnerRequest>): _73.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _73.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryOwnerResponse;
                fromJSON(object: any): _73.QueryOwnerResponse;
                toJSON(message: _73.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_73.QueryOwnerResponse>): _73.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _73.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySupplyRequest;
                fromJSON(object: any): _73.QuerySupplyRequest;
                toJSON(message: _73.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_73.QuerySupplyRequest>): _73.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _73.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySupplyResponse;
                fromJSON(object: any): _73.QuerySupplyResponse;
                toJSON(message: _73.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_73.QuerySupplyResponse>): _73.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _73.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryNFTsRequest;
                fromJSON(object: any): _73.QueryNFTsRequest;
                toJSON(message: _73.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_73.QueryNFTsRequest>): _73.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _73.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryNFTsResponse;
                fromJSON(object: any): _73.QueryNFTsResponse;
                toJSON(message: _73.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_73.QueryNFTsResponse>): _73.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _73.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryNFTRequest;
                fromJSON(object: any): _73.QueryNFTRequest;
                toJSON(message: _73.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_73.QueryNFTRequest>): _73.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _73.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryNFTResponse;
                fromJSON(object: any): _73.QueryNFTResponse;
                toJSON(message: _73.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_73.QueryNFTResponse>): _73.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _73.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClassRequest;
                fromJSON(object: any): _73.QueryClassRequest;
                toJSON(message: _73.QueryClassRequest): unknown;
                fromPartial(object: Partial<_73.QueryClassRequest>): _73.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _73.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClassResponse;
                fromJSON(object: any): _73.QueryClassResponse;
                toJSON(message: _73.QueryClassResponse): unknown;
                fromPartial(object: Partial<_73.QueryClassResponse>): _73.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _73.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClassesRequest;
                fromJSON(object: any): _73.QueryClassesRequest;
                toJSON(message: _73.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_73.QueryClassesRequest>): _73.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _73.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClassesResponse;
                fromJSON(object: any): _73.QueryClassesResponse;
                toJSON(message: _73.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_73.QueryClassesResponse>): _73.QueryClassesResponse;
            };
            Class: {
                encode(message: _72.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Class;
                fromJSON(object: any): _72.Class;
                toJSON(message: _72.Class): unknown;
                fromPartial(object: Partial<_72.Class>): _72.Class;
            };
            NFT: {
                encode(message: _72.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.NFT;
                fromJSON(object: any): _72.NFT;
                toJSON(message: _72.NFT): unknown;
                fromPartial(object: Partial<_72.NFT>): _72.NFT;
            };
            GenesisState: {
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                fromJSON(object: any): _71.GenesisState;
                toJSON(message: _71.GenesisState): unknown;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
            };
            Entry: {
                encode(message: _71.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Entry;
                fromJSON(object: any): _71.Entry;
                toJSON(message: _71.Entry): unknown;
                fromPartial(object: Partial<_71.Entry>): _71.Entry;
            };
            EventSend: {
                encode(message: _70.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventSend;
                fromJSON(object: any): _70.EventSend;
                toJSON(message: _70.EventSend): unknown;
                fromPartial(object: Partial<_70.EventSend>): _70.EventSend;
            };
            EventMint: {
                encode(message: _70.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventMint;
                fromJSON(object: any): _70.EventMint;
                toJSON(message: _70.EventMint): unknown;
                fromPartial(object: Partial<_70.EventMint>): _70.EventMint;
            };
            EventBurn: {
                encode(message: _70.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventBurn;
                fromJSON(object: any): _70.EventBurn;
                toJSON(message: _70.EventBurn): unknown;
                fromPartial(object: Partial<_70.EventBurn>): _70.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _75.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TableDescriptor;
                fromJSON(object: any): _75.TableDescriptor;
                toJSON(message: _75.TableDescriptor): unknown;
                fromPartial(object: Partial<_75.TableDescriptor>): _75.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _75.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.PrimaryKeyDescriptor;
                fromJSON(object: any): _75.PrimaryKeyDescriptor;
                toJSON(message: _75.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_75.PrimaryKeyDescriptor>): _75.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _75.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SecondaryIndexDescriptor;
                fromJSON(object: any): _75.SecondaryIndexDescriptor;
                toJSON(message: _75.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_75.SecondaryIndexDescriptor>): _75.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _75.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SingletonDescriptor;
                fromJSON(object: any): _75.SingletonDescriptor;
                toJSON(message: _75.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_75.SingletonDescriptor>): _75.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _76.StorageType;
            storageTypeToJSON(object: _76.StorageType): string;
            StorageType: typeof _76.StorageType;
            StorageTypeSDKType: typeof _76.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _76.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ModuleSchemaDescriptor;
                fromJSON(object: any): _76.ModuleSchemaDescriptor;
                toJSON(message: _76.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_76.ModuleSchemaDescriptor>): _76.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _76.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _76.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _76.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_76.ModuleSchemaDescriptor_FileEntry>): _76.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                subspaces(request?: _78.QuerySubspacesRequest): Promise<_78.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _78.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsRequest;
                fromJSON(object: any): _78.QueryParamsRequest;
                toJSON(message: _78.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_78.QueryParamsRequest>): _78.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _78.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsResponse;
                fromJSON(object: any): _78.QueryParamsResponse;
                toJSON(message: _78.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_78.QueryParamsResponse>): _78.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _78.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySubspacesRequest;
                fromJSON(_: any): _78.QuerySubspacesRequest;
                toJSON(_: _78.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_78.QuerySubspacesRequest>): _78.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _78.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySubspacesResponse;
                fromJSON(object: any): _78.QuerySubspacesResponse;
                toJSON(message: _78.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_78.QuerySubspacesResponse>): _78.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _78.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Subspace;
                fromJSON(object: any): _78.Subspace;
                toJSON(message: _78.Subspace): unknown;
                fromPartial(object: Partial<_78.Subspace>): _78.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _77.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ParameterChangeProposal;
                fromJSON(object: any): _77.ParameterChangeProposal;
                toJSON(message: _77.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_77.ParameterChangeProposal>): _77.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _77.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ParamChange;
                fromJSON(object: any): _77.ParamChange;
                toJSON(message: _77.ParamChange): unknown;
                fromPartial(object: Partial<_77.ParamChange>): _77.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                signingInfo(request: _80.QuerySigningInfoRequest): Promise<_80.QuerySigningInfoResponse>;
                signingInfos(request?: _80.QuerySigningInfosRequest): Promise<_80.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _82.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _82.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _82.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgUnjail;
                fromJSON(object: any): _82.MsgUnjail;
                toJSON(message: _82.MsgUnjail): unknown;
                fromPartial(object: Partial<_82.MsgUnjail>): _82.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _82.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgUnjailResponse;
                fromJSON(_: any): _82.MsgUnjailResponse;
                toJSON(_: _82.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_82.MsgUnjailResponse>): _82.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _81.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ValidatorSigningInfo;
                fromJSON(object: any): _81.ValidatorSigningInfo;
                toJSON(message: _81.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_81.ValidatorSigningInfo>): _81.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _81.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Params;
                fromJSON(object: any): _81.Params;
                toJSON(message: _81.Params): unknown;
                fromPartial(object: Partial<_81.Params>): _81.Params;
            };
            QueryParamsRequest: {
                encode(_: _80.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryParamsRequest;
                fromJSON(_: any): _80.QueryParamsRequest;
                toJSON(_: _80.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _80.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryParamsResponse;
                fromJSON(object: any): _80.QueryParamsResponse;
                toJSON(message: _80.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _80.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QuerySigningInfoRequest;
                fromJSON(object: any): _80.QuerySigningInfoRequest;
                toJSON(message: _80.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_80.QuerySigningInfoRequest>): _80.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _80.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QuerySigningInfoResponse;
                fromJSON(object: any): _80.QuerySigningInfoResponse;
                toJSON(message: _80.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_80.QuerySigningInfoResponse>): _80.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _80.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QuerySigningInfosRequest;
                fromJSON(object: any): _80.QuerySigningInfosRequest;
                toJSON(message: _80.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_80.QuerySigningInfosRequest>): _80.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _80.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QuerySigningInfosResponse;
                fromJSON(object: any): _80.QuerySigningInfosResponse;
                toJSON(message: _80.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_80.QuerySigningInfosResponse>): _80.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GenesisState;
                fromJSON(object: any): _79.GenesisState;
                toJSON(message: _79.GenesisState): unknown;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
            };
            SigningInfo: {
                encode(message: _79.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SigningInfo;
                fromJSON(object: any): _79.SigningInfo;
                toJSON(message: _79.SigningInfo): unknown;
                fromPartial(object: Partial<_79.SigningInfo>): _79.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _79.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ValidatorMissedBlocks;
                fromJSON(object: any): _79.ValidatorMissedBlocks;
                toJSON(message: _79.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_79.ValidatorMissedBlocks>): _79.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _79.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MissedBlock;
                fromJSON(object: any): _79.MissedBlock;
                toJSON(message: _79.MissedBlock): unknown;
                fromPartial(object: Partial<_79.MissedBlock>): _79.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _85.QueryValidatorsRequest): Promise<_85.QueryValidatorsResponse>;
                validator(request: _85.QueryValidatorRequest): Promise<_85.QueryValidatorResponse>;
                validatorDelegations(request: _85.QueryValidatorDelegationsRequest): Promise<_85.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _85.QueryValidatorUnbondingDelegationsRequest): Promise<_85.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _85.QueryDelegationRequest): Promise<_85.QueryDelegationResponse>;
                unbondingDelegation(request: _85.QueryUnbondingDelegationRequest): Promise<_85.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _85.QueryDelegatorDelegationsRequest): Promise<_85.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _85.QueryDelegatorUnbondingDelegationsRequest): Promise<_85.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _85.QueryRedelegationsRequest): Promise<_85.QueryRedelegationsResponse>;
                delegatorValidators(request: _85.QueryDelegatorValidatorsRequest): Promise<_85.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _85.QueryDelegatorValidatorRequest): Promise<_85.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _85.QueryHistoricalInfoRequest): Promise<_85.QueryHistoricalInfoResponse>;
                pool(request?: _85.QueryPoolRequest): Promise<_85.QueryPoolResponse>;
                params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _87.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _87.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _87.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _87.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _87.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _87.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _87.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _87.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _87.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _87.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _87.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateValidator;
                fromJSON(object: any): _87.MsgCreateValidator;
                toJSON(message: _87.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_87.MsgCreateValidator>): _87.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _87.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateValidatorResponse;
                fromJSON(_: any): _87.MsgCreateValidatorResponse;
                toJSON(_: _87.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_87.MsgCreateValidatorResponse>): _87.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _87.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgEditValidator;
                fromJSON(object: any): _87.MsgEditValidator;
                toJSON(message: _87.MsgEditValidator): unknown;
                fromPartial(object: Partial<_87.MsgEditValidator>): _87.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _87.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgEditValidatorResponse;
                fromJSON(_: any): _87.MsgEditValidatorResponse;
                toJSON(_: _87.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_87.MsgEditValidatorResponse>): _87.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _87.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgDelegate;
                fromJSON(object: any): _87.MsgDelegate;
                toJSON(message: _87.MsgDelegate): unknown;
                fromPartial(object: Partial<_87.MsgDelegate>): _87.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _87.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgDelegateResponse;
                fromJSON(_: any): _87.MsgDelegateResponse;
                toJSON(_: _87.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_87.MsgDelegateResponse>): _87.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _87.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgBeginRedelegate;
                fromJSON(object: any): _87.MsgBeginRedelegate;
                toJSON(message: _87.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_87.MsgBeginRedelegate>): _87.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _87.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgBeginRedelegateResponse;
                fromJSON(object: any): _87.MsgBeginRedelegateResponse;
                toJSON(message: _87.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_87.MsgBeginRedelegateResponse>): _87.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _87.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUndelegate;
                fromJSON(object: any): _87.MsgUndelegate;
                toJSON(message: _87.MsgUndelegate): unknown;
                fromPartial(object: Partial<_87.MsgUndelegate>): _87.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _87.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgUndelegateResponse;
                fromJSON(object: any): _87.MsgUndelegateResponse;
                toJSON(message: _87.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_87.MsgUndelegateResponse>): _87.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _86.BondStatus;
            bondStatusToJSON(object: _86.BondStatus): string;
            BondStatus: typeof _86.BondStatus;
            BondStatusSDKType: typeof _86.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _86.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.HistoricalInfo;
                fromJSON(object: any): _86.HistoricalInfo;
                toJSON(message: _86.HistoricalInfo): unknown;
                fromPartial(object: Partial<_86.HistoricalInfo>): _86.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _86.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.CommissionRates;
                fromJSON(object: any): _86.CommissionRates;
                toJSON(message: _86.CommissionRates): unknown;
                fromPartial(object: Partial<_86.CommissionRates>): _86.CommissionRates;
            };
            Commission: {
                encode(message: _86.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Commission;
                fromJSON(object: any): _86.Commission;
                toJSON(message: _86.Commission): unknown;
                fromPartial(object: Partial<_86.Commission>): _86.Commission;
            };
            Description: {
                encode(message: _86.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Description;
                fromJSON(object: any): _86.Description;
                toJSON(message: _86.Description): unknown;
                fromPartial(object: Partial<_86.Description>): _86.Description;
            };
            Validator: {
                encode(message: _86.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Validator;
                fromJSON(object: any): _86.Validator;
                toJSON(message: _86.Validator): unknown;
                fromPartial(object: Partial<_86.Validator>): _86.Validator;
            };
            ValAddresses: {
                encode(message: _86.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValAddresses;
                fromJSON(object: any): _86.ValAddresses;
                toJSON(message: _86.ValAddresses): unknown;
                fromPartial(object: Partial<_86.ValAddresses>): _86.ValAddresses;
            };
            DVPair: {
                encode(message: _86.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DVPair;
                fromJSON(object: any): _86.DVPair;
                toJSON(message: _86.DVPair): unknown;
                fromPartial(object: Partial<_86.DVPair>): _86.DVPair;
            };
            DVPairs: {
                encode(message: _86.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DVPairs;
                fromJSON(object: any): _86.DVPairs;
                toJSON(message: _86.DVPairs): unknown;
                fromPartial(object: Partial<_86.DVPairs>): _86.DVPairs;
            };
            DVVTriplet: {
                encode(message: _86.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DVVTriplet;
                fromJSON(object: any): _86.DVVTriplet;
                toJSON(message: _86.DVVTriplet): unknown;
                fromPartial(object: Partial<_86.DVVTriplet>): _86.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _86.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DVVTriplets;
                fromJSON(object: any): _86.DVVTriplets;
                toJSON(message: _86.DVVTriplets): unknown;
                fromPartial(object: Partial<_86.DVVTriplets>): _86.DVVTriplets;
            };
            Delegation: {
                encode(message: _86.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Delegation;
                fromJSON(object: any): _86.Delegation;
                toJSON(message: _86.Delegation): unknown;
                fromPartial(object: Partial<_86.Delegation>): _86.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _86.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.UnbondingDelegation;
                fromJSON(object: any): _86.UnbondingDelegation;
                toJSON(message: _86.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_86.UnbondingDelegation>): _86.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _86.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.UnbondingDelegationEntry;
                fromJSON(object: any): _86.UnbondingDelegationEntry;
                toJSON(message: _86.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_86.UnbondingDelegationEntry>): _86.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _86.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RedelegationEntry;
                fromJSON(object: any): _86.RedelegationEntry;
                toJSON(message: _86.RedelegationEntry): unknown;
                fromPartial(object: Partial<_86.RedelegationEntry>): _86.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _86.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Redelegation;
                fromJSON(object: any): _86.Redelegation;
                toJSON(message: _86.Redelegation): unknown;
                fromPartial(object: Partial<_86.Redelegation>): _86.Redelegation;
            };
            Params: {
                encode(message: _86.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Params;
                fromJSON(object: any): _86.Params;
                toJSON(message: _86.Params): unknown;
                fromPartial(object: Partial<_86.Params>): _86.Params;
            };
            DelegationResponse: {
                encode(message: _86.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DelegationResponse;
                fromJSON(object: any): _86.DelegationResponse;
                toJSON(message: _86.DelegationResponse): unknown;
                fromPartial(object: Partial<_86.DelegationResponse>): _86.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _86.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RedelegationEntryResponse;
                fromJSON(object: any): _86.RedelegationEntryResponse;
                toJSON(message: _86.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_86.RedelegationEntryResponse>): _86.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _86.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RedelegationResponse;
                fromJSON(object: any): _86.RedelegationResponse;
                toJSON(message: _86.RedelegationResponse): unknown;
                fromPartial(object: Partial<_86.RedelegationResponse>): _86.RedelegationResponse;
            };
            Pool: {
                encode(message: _86.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Pool;
                fromJSON(object: any): _86.Pool;
                toJSON(message: _86.Pool): unknown;
                fromPartial(object: Partial<_86.Pool>): _86.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _85.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryValidatorsRequest;
                fromJSON(object: any): _85.QueryValidatorsRequest;
                toJSON(message: _85.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_85.QueryValidatorsRequest>): _85.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _85.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryValidatorsResponse;
                fromJSON(object: any): _85.QueryValidatorsResponse;
                toJSON(message: _85.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_85.QueryValidatorsResponse>): _85.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _85.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryValidatorRequest;
                fromJSON(object: any): _85.QueryValidatorRequest;
                toJSON(message: _85.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_85.QueryValidatorRequest>): _85.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _85.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryValidatorResponse;
                fromJSON(object: any): _85.QueryValidatorResponse;
                toJSON(message: _85.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_85.QueryValidatorResponse>): _85.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _85.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _85.QueryValidatorDelegationsRequest;
                toJSON(message: _85.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_85.QueryValidatorDelegationsRequest>): _85.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _85.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _85.QueryValidatorDelegationsResponse;
                toJSON(message: _85.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_85.QueryValidatorDelegationsResponse>): _85.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _85.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _85.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _85.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_85.QueryValidatorUnbondingDelegationsRequest>): _85.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _85.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _85.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _85.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_85.QueryValidatorUnbondingDelegationsResponse>): _85.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _85.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegationRequest;
                fromJSON(object: any): _85.QueryDelegationRequest;
                toJSON(message: _85.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_85.QueryDelegationRequest>): _85.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _85.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegationResponse;
                fromJSON(object: any): _85.QueryDelegationResponse;
                toJSON(message: _85.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_85.QueryDelegationResponse>): _85.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _85.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _85.QueryUnbondingDelegationRequest;
                toJSON(message: _85.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_85.QueryUnbondingDelegationRequest>): _85.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _85.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _85.QueryUnbondingDelegationResponse;
                toJSON(message: _85.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_85.QueryUnbondingDelegationResponse>): _85.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _85.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _85.QueryDelegatorDelegationsRequest;
                toJSON(message: _85.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_85.QueryDelegatorDelegationsRequest>): _85.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _85.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _85.QueryDelegatorDelegationsResponse;
                toJSON(message: _85.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_85.QueryDelegatorDelegationsResponse>): _85.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _85.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _85.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _85.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_85.QueryDelegatorUnbondingDelegationsRequest>): _85.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _85.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _85.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _85.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_85.QueryDelegatorUnbondingDelegationsResponse>): _85.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _85.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryRedelegationsRequest;
                fromJSON(object: any): _85.QueryRedelegationsRequest;
                toJSON(message: _85.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_85.QueryRedelegationsRequest>): _85.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _85.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryRedelegationsResponse;
                fromJSON(object: any): _85.QueryRedelegationsResponse;
                toJSON(message: _85.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_85.QueryRedelegationsResponse>): _85.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _85.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _85.QueryDelegatorValidatorsRequest;
                toJSON(message: _85.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorsRequest>): _85.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _85.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _85.QueryDelegatorValidatorsResponse;
                toJSON(message: _85.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorsResponse>): _85.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _85.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _85.QueryDelegatorValidatorRequest;
                toJSON(message: _85.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorRequest>): _85.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _85.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _85.QueryDelegatorValidatorResponse;
                toJSON(message: _85.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorResponse>): _85.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _85.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryHistoricalInfoRequest;
                fromJSON(object: any): _85.QueryHistoricalInfoRequest;
                toJSON(message: _85.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_85.QueryHistoricalInfoRequest>): _85.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _85.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryHistoricalInfoResponse;
                fromJSON(object: any): _85.QueryHistoricalInfoResponse;
                toJSON(message: _85.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_85.QueryHistoricalInfoResponse>): _85.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _85.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPoolRequest;
                fromJSON(_: any): _85.QueryPoolRequest;
                toJSON(_: _85.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_85.QueryPoolRequest>): _85.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _85.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryPoolResponse;
                fromJSON(object: any): _85.QueryPoolResponse;
                toJSON(message: _85.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_85.QueryPoolResponse>): _85.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _85.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsRequest;
                fromJSON(_: any): _85.QueryParamsRequest;
                toJSON(_: _85.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _85.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsResponse;
                fromJSON(object: any): _85.QueryParamsResponse;
                toJSON(message: _85.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.GenesisState;
                fromJSON(object: any): _84.GenesisState;
                toJSON(message: _84.GenesisState): unknown;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _84.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.LastValidatorPower;
                fromJSON(object: any): _84.LastValidatorPower;
                toJSON(message: _84.LastValidatorPower): unknown;
                fromPartial(object: Partial<_84.LastValidatorPower>): _84.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _83.AuthorizationType;
            authorizationTypeToJSON(object: _83.AuthorizationType): string;
            AuthorizationType: typeof _83.AuthorizationType;
            AuthorizationTypeSDKType: typeof _83.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _83.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.StakeAuthorization;
                fromJSON(object: any): _83.StakeAuthorization;
                toJSON(message: _83.StakeAuthorization): unknown;
                fromPartial(object: Partial<_83.StakeAuthorization>): _83.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _83.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.StakeAuthorization_Validators;
                fromJSON(object: any): _83.StakeAuthorization_Validators;
                toJSON(message: _83.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_83.StakeAuthorization_Validators>): _83.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _88.SignMode;
                signModeToJSON(object: _88.SignMode): string;
                SignMode: typeof _88.SignMode;
                SignModeSDKType: typeof _88.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _88.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignatureDescriptors;
                    fromJSON(object: any): _88.SignatureDescriptors;
                    toJSON(message: _88.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_88.SignatureDescriptors>): _88.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _88.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignatureDescriptor;
                    fromJSON(object: any): _88.SignatureDescriptor;
                    toJSON(message: _88.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_88.SignatureDescriptor>): _88.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _88.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignatureDescriptor_Data;
                    fromJSON(object: any): _88.SignatureDescriptor_Data;
                    toJSON(message: _88.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_88.SignatureDescriptor_Data>): _88.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _88.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _88.SignatureDescriptor_Data_Single;
                    toJSON(message: _88.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_88.SignatureDescriptor_Data_Single>): _88.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _88.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _88.SignatureDescriptor_Data_Multi;
                    toJSON(message: _88.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_88.SignatureDescriptor_Data_Multi>): _88.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _160.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _89.SimulateRequest): Promise<_89.SimulateResponse>;
                getTx(request: _89.GetTxRequest): Promise<_89.GetTxResponse>;
                broadcastTx(request: _89.BroadcastTxRequest): Promise<_89.BroadcastTxResponse>;
                getTxsEvent(request: _89.GetTxsEventRequest): Promise<_89.GetTxsEventResponse>;
                getBlockWithTxs(request: _89.GetBlockWithTxsRequest): Promise<_89.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _90.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Tx;
                fromJSON(object: any): _90.Tx;
                toJSON(message: _90.Tx): unknown;
                fromPartial(object: Partial<_90.Tx>): _90.Tx;
            };
            TxRaw: {
                encode(message: _90.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.TxRaw;
                fromJSON(object: any): _90.TxRaw;
                toJSON(message: _90.TxRaw): unknown;
                fromPartial(object: Partial<_90.TxRaw>): _90.TxRaw;
            };
            SignDoc: {
                encode(message: _90.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignDoc;
                fromJSON(object: any): _90.SignDoc;
                toJSON(message: _90.SignDoc): unknown;
                fromPartial(object: Partial<_90.SignDoc>): _90.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _90.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignDocDirectAux;
                fromJSON(object: any): _90.SignDocDirectAux;
                toJSON(message: _90.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_90.SignDocDirectAux>): _90.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _90.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.TxBody;
                fromJSON(object: any): _90.TxBody;
                toJSON(message: _90.TxBody): unknown;
                fromPartial(object: Partial<_90.TxBody>): _90.TxBody;
            };
            AuthInfo: {
                encode(message: _90.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.AuthInfo;
                fromJSON(object: any): _90.AuthInfo;
                toJSON(message: _90.AuthInfo): unknown;
                fromPartial(object: Partial<_90.AuthInfo>): _90.AuthInfo;
            };
            SignerInfo: {
                encode(message: _90.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignerInfo;
                fromJSON(object: any): _90.SignerInfo;
                toJSON(message: _90.SignerInfo): unknown;
                fromPartial(object: Partial<_90.SignerInfo>): _90.SignerInfo;
            };
            ModeInfo: {
                encode(message: _90.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ModeInfo;
                fromJSON(object: any): _90.ModeInfo;
                toJSON(message: _90.ModeInfo): unknown;
                fromPartial(object: Partial<_90.ModeInfo>): _90.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _90.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ModeInfo_Single;
                fromJSON(object: any): _90.ModeInfo_Single;
                toJSON(message: _90.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_90.ModeInfo_Single>): _90.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _90.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ModeInfo_Multi;
                fromJSON(object: any): _90.ModeInfo_Multi;
                toJSON(message: _90.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_90.ModeInfo_Multi>): _90.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _90.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Fee;
                fromJSON(object: any): _90.Fee;
                toJSON(message: _90.Fee): unknown;
                fromPartial(object: Partial<_90.Fee>): _90.Fee;
            };
            Tip: {
                encode(message: _90.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Tip;
                fromJSON(object: any): _90.Tip;
                toJSON(message: _90.Tip): unknown;
                fromPartial(object: Partial<_90.Tip>): _90.Tip;
            };
            AuxSignerData: {
                encode(message: _90.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.AuxSignerData;
                fromJSON(object: any): _90.AuxSignerData;
                toJSON(message: _90.AuxSignerData): unknown;
                fromPartial(object: Partial<_90.AuxSignerData>): _90.AuxSignerData;
            };
            orderByFromJSON(object: any): _89.OrderBy;
            orderByToJSON(object: _89.OrderBy): string;
            broadcastModeFromJSON(object: any): _89.BroadcastMode;
            broadcastModeToJSON(object: _89.BroadcastMode): string;
            OrderBy: typeof _89.OrderBy;
            OrderBySDKType: typeof _89.OrderBySDKType;
            BroadcastMode: typeof _89.BroadcastMode;
            BroadcastModeSDKType: typeof _89.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _89.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GetTxsEventRequest;
                fromJSON(object: any): _89.GetTxsEventRequest;
                toJSON(message: _89.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_89.GetTxsEventRequest>): _89.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _89.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GetTxsEventResponse;
                fromJSON(object: any): _89.GetTxsEventResponse;
                toJSON(message: _89.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_89.GetTxsEventResponse>): _89.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _89.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.BroadcastTxRequest;
                fromJSON(object: any): _89.BroadcastTxRequest;
                toJSON(message: _89.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_89.BroadcastTxRequest>): _89.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _89.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.BroadcastTxResponse;
                fromJSON(object: any): _89.BroadcastTxResponse;
                toJSON(message: _89.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_89.BroadcastTxResponse>): _89.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _89.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SimulateRequest;
                fromJSON(object: any): _89.SimulateRequest;
                toJSON(message: _89.SimulateRequest): unknown;
                fromPartial(object: Partial<_89.SimulateRequest>): _89.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _89.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SimulateResponse;
                fromJSON(object: any): _89.SimulateResponse;
                toJSON(message: _89.SimulateResponse): unknown;
                fromPartial(object: Partial<_89.SimulateResponse>): _89.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _89.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GetTxRequest;
                fromJSON(object: any): _89.GetTxRequest;
                toJSON(message: _89.GetTxRequest): unknown;
                fromPartial(object: Partial<_89.GetTxRequest>): _89.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _89.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GetTxResponse;
                fromJSON(object: any): _89.GetTxResponse;
                toJSON(message: _89.GetTxResponse): unknown;
                fromPartial(object: Partial<_89.GetTxResponse>): _89.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _89.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GetBlockWithTxsRequest;
                fromJSON(object: any): _89.GetBlockWithTxsRequest;
                toJSON(message: _89.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_89.GetBlockWithTxsRequest>): _89.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _89.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GetBlockWithTxsResponse;
                fromJSON(object: any): _89.GetBlockWithTxsResponse;
                toJSON(message: _89.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_89.GetBlockWithTxsResponse>): _89.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _91.QueryCurrentPlanRequest): Promise<_91.QueryCurrentPlanResponse>;
                appliedPlan(request: _91.QueryAppliedPlanRequest): Promise<_91.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _91.QueryUpgradedConsensusStateRequest): Promise<_91.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _91.QueryModuleVersionsRequest): Promise<_91.QueryModuleVersionsResponse>;
                authority(request?: _91.QueryAuthorityRequest): Promise<_91.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _92.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _92.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _92.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _92.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _93.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Plan;
                fromJSON(object: any): _93.Plan;
                toJSON(message: _93.Plan): unknown;
                fromPartial(object: Partial<_93.Plan>): _93.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _93.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SoftwareUpgradeProposal;
                fromJSON(object: any): _93.SoftwareUpgradeProposal;
                toJSON(message: _93.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_93.SoftwareUpgradeProposal>): _93.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _93.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _93.CancelSoftwareUpgradeProposal;
                toJSON(message: _93.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_93.CancelSoftwareUpgradeProposal>): _93.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _93.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ModuleVersion;
                fromJSON(object: any): _93.ModuleVersion;
                toJSON(message: _93.ModuleVersion): unknown;
                fromPartial(object: Partial<_93.ModuleVersion>): _93.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _92.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgSoftwareUpgrade;
                fromJSON(object: any): _92.MsgSoftwareUpgrade;
                toJSON(message: _92.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_92.MsgSoftwareUpgrade>): _92.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _92.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _92.MsgSoftwareUpgradeResponse;
                toJSON(_: _92.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_92.MsgSoftwareUpgradeResponse>): _92.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _92.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCancelUpgrade;
                fromJSON(object: any): _92.MsgCancelUpgrade;
                toJSON(message: _92.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_92.MsgCancelUpgrade>): _92.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _92.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCancelUpgradeResponse;
                fromJSON(_: any): _92.MsgCancelUpgradeResponse;
                toJSON(_: _92.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_92.MsgCancelUpgradeResponse>): _92.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _91.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryCurrentPlanRequest;
                fromJSON(_: any): _91.QueryCurrentPlanRequest;
                toJSON(_: _91.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_91.QueryCurrentPlanRequest>): _91.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _91.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryCurrentPlanResponse;
                fromJSON(object: any): _91.QueryCurrentPlanResponse;
                toJSON(message: _91.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_91.QueryCurrentPlanResponse>): _91.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _91.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAppliedPlanRequest;
                fromJSON(object: any): _91.QueryAppliedPlanRequest;
                toJSON(message: _91.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_91.QueryAppliedPlanRequest>): _91.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _91.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAppliedPlanResponse;
                fromJSON(object: any): _91.QueryAppliedPlanResponse;
                toJSON(message: _91.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_91.QueryAppliedPlanResponse>): _91.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _91.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateRequest;
                toJSON(message: _91.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_91.QueryUpgradedConsensusStateRequest>): _91.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _91.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateResponse;
                toJSON(message: _91.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_91.QueryUpgradedConsensusStateResponse>): _91.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _91.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryModuleVersionsRequest;
                fromJSON(object: any): _91.QueryModuleVersionsRequest;
                toJSON(message: _91.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_91.QueryModuleVersionsRequest>): _91.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _91.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryModuleVersionsResponse;
                fromJSON(object: any): _91.QueryModuleVersionsResponse;
                toJSON(message: _91.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_91.QueryModuleVersionsResponse>): _91.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _91.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAuthorityRequest;
                fromJSON(_: any): _91.QueryAuthorityRequest;
                toJSON(_: _91.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_91.QueryAuthorityRequest>): _91.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _91.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAuthorityResponse;
                fromJSON(object: any): _91.QueryAuthorityResponse;
                toJSON(message: _91.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_91.QueryAuthorityResponse>): _91.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _94.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _94.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _94.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _94.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _94.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _94.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _95.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.BaseVestingAccount;
                fromJSON(object: any): _95.BaseVestingAccount;
                toJSON(message: _95.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_95.BaseVestingAccount>): _95.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _95.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ContinuousVestingAccount;
                fromJSON(object: any): _95.ContinuousVestingAccount;
                toJSON(message: _95.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_95.ContinuousVestingAccount>): _95.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _95.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DelayedVestingAccount;
                fromJSON(object: any): _95.DelayedVestingAccount;
                toJSON(message: _95.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_95.DelayedVestingAccount>): _95.DelayedVestingAccount;
            };
            Period: {
                encode(message: _95.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Period;
                fromJSON(object: any): _95.Period;
                toJSON(message: _95.Period): unknown;
                fromPartial(object: Partial<_95.Period>): _95.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _95.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.PeriodicVestingAccount;
                fromJSON(object: any): _95.PeriodicVestingAccount;
                toJSON(message: _95.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_95.PeriodicVestingAccount>): _95.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _95.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.PermanentLockedAccount;
                fromJSON(object: any): _95.PermanentLockedAccount;
                toJSON(message: _95.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_95.PermanentLockedAccount>): _95.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _94.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateVestingAccount;
                fromJSON(object: any): _94.MsgCreateVestingAccount;
                toJSON(message: _94.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_94.MsgCreateVestingAccount>): _94.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _94.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _94.MsgCreateVestingAccountResponse;
                toJSON(_: _94.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_94.MsgCreateVestingAccountResponse>): _94.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _94.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _94.MsgCreatePermanentLockedAccount;
                toJSON(message: _94.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_94.MsgCreatePermanentLockedAccount>): _94.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _94.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _94.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _94.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_94.MsgCreatePermanentLockedAccountResponse>): _94.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _94.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _94.MsgCreatePeriodicVestingAccount;
                toJSON(message: _94.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_94.MsgCreatePeriodicVestingAccount>): _94.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _94.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _94.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _94.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_94.MsgCreatePeriodicVestingAccountResponse>): _94.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _162.MsgClientImpl;
                };
                bank: {
                    v1beta1: _163.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _164.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _165.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _166.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _167.MsgClientImpl;
                };
                gov: {
                    v1: _168.MsgClientImpl;
                    v1beta1: _169.MsgClientImpl;
                };
                group: {
                    v1: _170.MsgClientImpl;
                };
                nft: {
                    v1beta1: _171.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _172.MsgClientImpl;
                };
                staking: {
                    v1beta1: _173.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _174.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _175.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                        account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                        params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                        moduleAccounts(request?: _7.QueryModuleAccountsRequest): Promise<_7.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _7.Bech32PrefixRequest): Promise<_7.Bech32PrefixResponse>;
                        addressBytesToString(request: _7.AddressBytesToStringRequest): Promise<_7.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _7.AddressStringToBytesRequest): Promise<_7.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _11.QueryGrantsRequest): Promise<_11.QueryGrantsResponse>;
                        granterGrants(request: _11.QueryGranterGrantsRequest): Promise<_11.QueryGranterGrantsResponse>;
                        granteeGrants(request: _11.QueryGranteeGrantsRequest): Promise<_11.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _16.QueryBalanceRequest): Promise<_16.QueryBalanceResponse>;
                        allBalances(request: _16.QueryAllBalancesRequest): Promise<_16.QueryAllBalancesResponse>;
                        spendableBalances(request: _16.QuerySpendableBalancesRequest): Promise<_16.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _16.QueryTotalSupplyRequest): Promise<_16.QueryTotalSupplyResponse>;
                        supplyOf(request: _16.QuerySupplyOfRequest): Promise<_16.QuerySupplyOfResponse>;
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                        denomMetadata(request: _16.QueryDenomMetadataRequest): Promise<_16.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _16.QueryDenomsMetadataRequest): Promise<_16.QueryDenomsMetadataResponse>;
                        denomOwners(request: _16.QueryDenomOwnersRequest): Promise<_16.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _20.ConfigRequest): Promise<_20.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _27.GetNodeInfoRequest): Promise<_27.GetNodeInfoResponse>;
                            getSyncing(request?: _27.GetSyncingRequest): Promise<_27.GetSyncingResponse>;
                            getLatestBlock(request?: _27.GetLatestBlockRequest): Promise<_27.GetLatestBlockResponse>;
                            getBlockByHeight(request: _27.GetBlockByHeightRequest): Promise<_27.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _27.GetLatestValidatorSetRequest): Promise<_27.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _27.GetValidatorSetByHeightRequest): Promise<_27.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _42.QueryParamsRequest): Promise<_42.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _42.QueryValidatorOutstandingRewardsRequest): Promise<_42.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _42.QueryValidatorCommissionRequest): Promise<_42.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _42.QueryValidatorSlashesRequest): Promise<_42.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _42.QueryDelegationRewardsRequest): Promise<_42.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _42.QueryDelegationTotalRewardsRequest): Promise<_42.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _42.QueryDelegatorValidatorsRequest): Promise<_42.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _42.QueryDelegatorWithdrawAddressRequest): Promise<_42.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _42.QueryCommunityPoolRequest): Promise<_42.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _46.QueryEvidenceRequest): Promise<_46.QueryEvidenceResponse>;
                        allEvidence(request?: _46.QueryAllEvidenceRequest): Promise<_46.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _50.QueryAllowanceRequest): Promise<_50.QueryAllowanceResponse>;
                        allowances(request: _50.QueryAllowancesRequest): Promise<_50.QueryAllowancesResponse>;
                        allowancesByGranter(request: _50.QueryAllowancesByGranterRequest): Promise<_50.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _55.QueryProposalRequest): Promise<_55.QueryProposalResponse>;
                        proposals(request: _55.QueryProposalsRequest): Promise<_55.QueryProposalsResponse>;
                        vote(request: _55.QueryVoteRequest): Promise<_55.QueryVoteResponse>;
                        votes(request: _55.QueryVotesRequest): Promise<_55.QueryVotesResponse>;
                        params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        deposit(request: _55.QueryDepositRequest): Promise<_55.QueryDepositResponse>;
                        deposits(request: _55.QueryDepositsRequest): Promise<_55.QueryDepositsResponse>;
                        tallyResult(request: _55.QueryTallyResultRequest): Promise<_55.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _59.QueryProposalRequest): Promise<_59.QueryProposalResponse>;
                        proposals(request: _59.QueryProposalsRequest): Promise<_59.QueryProposalsResponse>;
                        vote(request: _59.QueryVoteRequest): Promise<_59.QueryVoteResponse>;
                        votes(request: _59.QueryVotesRequest): Promise<_59.QueryVotesResponse>;
                        params(request: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                        deposit(request: _59.QueryDepositRequest): Promise<_59.QueryDepositResponse>;
                        deposits(request: _59.QueryDepositsRequest): Promise<_59.QueryDepositsResponse>;
                        tallyResult(request: _59.QueryTallyResultRequest): Promise<_59.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _63.QueryGroupInfoRequest): Promise<_63.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _63.QueryGroupPolicyInfoRequest): Promise<_63.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _63.QueryGroupMembersRequest): Promise<_63.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _63.QueryGroupsByAdminRequest): Promise<_63.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _63.QueryGroupPoliciesByGroupRequest): Promise<_63.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _63.QueryGroupPoliciesByAdminRequest): Promise<_63.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _63.QueryProposalRequest): Promise<_63.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _63.QueryProposalsByGroupPolicyRequest): Promise<_63.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _63.QueryVoteByProposalVoterRequest): Promise<_63.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _63.QueryVotesByProposalRequest): Promise<_63.QueryVotesByProposalResponse>;
                        votesByVoter(request: _63.QueryVotesByVoterRequest): Promise<_63.QueryVotesByVoterResponse>;
                        groupsByMember(request: _63.QueryGroupsByMemberRequest): Promise<_63.QueryGroupsByMemberResponse>;
                        tallyResult(request: _63.QueryTallyResultRequest): Promise<_63.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                        inflation(request?: _68.QueryInflationRequest): Promise<_68.QueryInflationResponse>;
                        annualProvisions(request?: _68.QueryAnnualProvisionsRequest): Promise<_68.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _73.QueryBalanceRequest): Promise<_73.QueryBalanceResponse>;
                        owner(request: _73.QueryOwnerRequest): Promise<_73.QueryOwnerResponse>;
                        supply(request: _73.QuerySupplyRequest): Promise<_73.QuerySupplyResponse>;
                        nFTs(request: _73.QueryNFTsRequest): Promise<_73.QueryNFTsResponse>;
                        nFT(request: _73.QueryNFTRequest): Promise<_73.QueryNFTResponse>;
                        class(request: _73.QueryClassRequest): Promise<_73.QueryClassResponse>;
                        classes(request?: _73.QueryClassesRequest): Promise<_73.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                        subspaces(request?: _78.QuerySubspacesRequest): Promise<_78.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        signingInfo(request: _80.QuerySigningInfoRequest): Promise<_80.QuerySigningInfoResponse>;
                        signingInfos(request?: _80.QuerySigningInfosRequest): Promise<_80.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _85.QueryValidatorsRequest): Promise<_85.QueryValidatorsResponse>;
                        validator(request: _85.QueryValidatorRequest): Promise<_85.QueryValidatorResponse>;
                        validatorDelegations(request: _85.QueryValidatorDelegationsRequest): Promise<_85.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _85.QueryValidatorUnbondingDelegationsRequest): Promise<_85.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _85.QueryDelegationRequest): Promise<_85.QueryDelegationResponse>;
                        unbondingDelegation(request: _85.QueryUnbondingDelegationRequest): Promise<_85.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _85.QueryDelegatorDelegationsRequest): Promise<_85.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _85.QueryDelegatorUnbondingDelegationsRequest): Promise<_85.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _85.QueryRedelegationsRequest): Promise<_85.QueryRedelegationsResponse>;
                        delegatorValidators(request: _85.QueryDelegatorValidatorsRequest): Promise<_85.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _85.QueryDelegatorValidatorRequest): Promise<_85.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _85.QueryHistoricalInfoRequest): Promise<_85.QueryHistoricalInfoResponse>;
                        pool(request?: _85.QueryPoolRequest): Promise<_85.QueryPoolResponse>;
                        params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _89.SimulateRequest): Promise<_89.SimulateResponse>;
                        getTx(request: _89.GetTxRequest): Promise<_89.GetTxResponse>;
                        broadcastTx(request: _89.BroadcastTxRequest): Promise<_89.BroadcastTxResponse>;
                        getTxsEvent(request: _89.GetTxsEventRequest): Promise<_89.GetTxsEventResponse>;
                        getBlockWithTxs(request: _89.GetBlockWithTxsRequest): Promise<_89.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _91.QueryCurrentPlanRequest): Promise<_91.QueryCurrentPlanResponse>;
                        appliedPlan(request: _91.QueryAppliedPlanRequest): Promise<_91.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _91.QueryUpgradedConsensusStateRequest): Promise<_91.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _91.QueryModuleVersionsRequest): Promise<_91.QueryModuleVersionsResponse>;
                        authority(request?: _91.QueryAuthorityRequest): Promise<_91.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
