import * as _104 from "./abci/types";
import * as _105 from "./crypto/keys";
import * as _106 from "./crypto/proof";
import * as _107 from "./libs/bits/types";
import * as _108 from "./p2p/types";
import * as _109 from "./types/block";
import * as _110 from "./types/evidence";
import * as _111 from "./types/params";
import * as _112 from "./types/types";
import * as _113 from "./types/validator";
import * as _114 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _104.CheckTxType;
        checkTxTypeToJSON(object: _104.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _104.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _104.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _104.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _104.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _104.EvidenceType;
        evidenceTypeToJSON(object: _104.EvidenceType): string;
        CheckTxType: typeof _104.CheckTxType;
        CheckTxTypeSDKType: typeof _104.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _104.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _104.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _104.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _104.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _104.EvidenceType;
        EvidenceTypeSDKType: typeof _104.EvidenceTypeSDKType;
        Request: {
            encode(message: _104.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Request;
            fromJSON(object: any): _104.Request;
            toJSON(message: _104.Request): unknown;
            fromPartial(object: Partial<_104.Request>): _104.Request;
        };
        RequestEcho: {
            encode(message: _104.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestEcho;
            fromJSON(object: any): _104.RequestEcho;
            toJSON(message: _104.RequestEcho): unknown;
            fromPartial(object: Partial<_104.RequestEcho>): _104.RequestEcho;
        };
        RequestFlush: {
            encode(_: _104.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestFlush;
            fromJSON(_: any): _104.RequestFlush;
            toJSON(_: _104.RequestFlush): unknown;
            fromPartial(_: Partial<_104.RequestFlush>): _104.RequestFlush;
        };
        RequestInfo: {
            encode(message: _104.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestInfo;
            fromJSON(object: any): _104.RequestInfo;
            toJSON(message: _104.RequestInfo): unknown;
            fromPartial(object: Partial<_104.RequestInfo>): _104.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _104.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestSetOption;
            fromJSON(object: any): _104.RequestSetOption;
            toJSON(message: _104.RequestSetOption): unknown;
            fromPartial(object: Partial<_104.RequestSetOption>): _104.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _104.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestInitChain;
            fromJSON(object: any): _104.RequestInitChain;
            toJSON(message: _104.RequestInitChain): unknown;
            fromPartial(object: Partial<_104.RequestInitChain>): _104.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _104.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestQuery;
            fromJSON(object: any): _104.RequestQuery;
            toJSON(message: _104.RequestQuery): unknown;
            fromPartial(object: Partial<_104.RequestQuery>): _104.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _104.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestBeginBlock;
            fromJSON(object: any): _104.RequestBeginBlock;
            toJSON(message: _104.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_104.RequestBeginBlock>): _104.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _104.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestCheckTx;
            fromJSON(object: any): _104.RequestCheckTx;
            toJSON(message: _104.RequestCheckTx): unknown;
            fromPartial(object: Partial<_104.RequestCheckTx>): _104.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _104.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestDeliverTx;
            fromJSON(object: any): _104.RequestDeliverTx;
            toJSON(message: _104.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_104.RequestDeliverTx>): _104.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _104.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestEndBlock;
            fromJSON(object: any): _104.RequestEndBlock;
            toJSON(message: _104.RequestEndBlock): unknown;
            fromPartial(object: Partial<_104.RequestEndBlock>): _104.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _104.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestCommit;
            fromJSON(_: any): _104.RequestCommit;
            toJSON(_: _104.RequestCommit): unknown;
            fromPartial(_: Partial<_104.RequestCommit>): _104.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _104.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestListSnapshots;
            fromJSON(_: any): _104.RequestListSnapshots;
            toJSON(_: _104.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_104.RequestListSnapshots>): _104.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _104.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestOfferSnapshot;
            fromJSON(object: any): _104.RequestOfferSnapshot;
            toJSON(message: _104.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_104.RequestOfferSnapshot>): _104.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _104.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestLoadSnapshotChunk;
            fromJSON(object: any): _104.RequestLoadSnapshotChunk;
            toJSON(message: _104.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_104.RequestLoadSnapshotChunk>): _104.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _104.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RequestApplySnapshotChunk;
            fromJSON(object: any): _104.RequestApplySnapshotChunk;
            toJSON(message: _104.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_104.RequestApplySnapshotChunk>): _104.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _104.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Response;
            fromJSON(object: any): _104.Response;
            toJSON(message: _104.Response): unknown;
            fromPartial(object: Partial<_104.Response>): _104.Response;
        };
        ResponseException: {
            encode(message: _104.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseException;
            fromJSON(object: any): _104.ResponseException;
            toJSON(message: _104.ResponseException): unknown;
            fromPartial(object: Partial<_104.ResponseException>): _104.ResponseException;
        };
        ResponseEcho: {
            encode(message: _104.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseEcho;
            fromJSON(object: any): _104.ResponseEcho;
            toJSON(message: _104.ResponseEcho): unknown;
            fromPartial(object: Partial<_104.ResponseEcho>): _104.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _104.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseFlush;
            fromJSON(_: any): _104.ResponseFlush;
            toJSON(_: _104.ResponseFlush): unknown;
            fromPartial(_: Partial<_104.ResponseFlush>): _104.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _104.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseInfo;
            fromJSON(object: any): _104.ResponseInfo;
            toJSON(message: _104.ResponseInfo): unknown;
            fromPartial(object: Partial<_104.ResponseInfo>): _104.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _104.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseSetOption;
            fromJSON(object: any): _104.ResponseSetOption;
            toJSON(message: _104.ResponseSetOption): unknown;
            fromPartial(object: Partial<_104.ResponseSetOption>): _104.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _104.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseInitChain;
            fromJSON(object: any): _104.ResponseInitChain;
            toJSON(message: _104.ResponseInitChain): unknown;
            fromPartial(object: Partial<_104.ResponseInitChain>): _104.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _104.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseQuery;
            fromJSON(object: any): _104.ResponseQuery;
            toJSON(message: _104.ResponseQuery): unknown;
            fromPartial(object: Partial<_104.ResponseQuery>): _104.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _104.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseBeginBlock;
            fromJSON(object: any): _104.ResponseBeginBlock;
            toJSON(message: _104.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_104.ResponseBeginBlock>): _104.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _104.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseCheckTx;
            fromJSON(object: any): _104.ResponseCheckTx;
            toJSON(message: _104.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_104.ResponseCheckTx>): _104.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _104.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseDeliverTx;
            fromJSON(object: any): _104.ResponseDeliverTx;
            toJSON(message: _104.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_104.ResponseDeliverTx>): _104.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _104.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseEndBlock;
            fromJSON(object: any): _104.ResponseEndBlock;
            toJSON(message: _104.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_104.ResponseEndBlock>): _104.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _104.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseCommit;
            fromJSON(object: any): _104.ResponseCommit;
            toJSON(message: _104.ResponseCommit): unknown;
            fromPartial(object: Partial<_104.ResponseCommit>): _104.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _104.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseListSnapshots;
            fromJSON(object: any): _104.ResponseListSnapshots;
            toJSON(message: _104.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_104.ResponseListSnapshots>): _104.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _104.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseOfferSnapshot;
            fromJSON(object: any): _104.ResponseOfferSnapshot;
            toJSON(message: _104.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_104.ResponseOfferSnapshot>): _104.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _104.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _104.ResponseLoadSnapshotChunk;
            toJSON(message: _104.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_104.ResponseLoadSnapshotChunk>): _104.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _104.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ResponseApplySnapshotChunk;
            fromJSON(object: any): _104.ResponseApplySnapshotChunk;
            toJSON(message: _104.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_104.ResponseApplySnapshotChunk>): _104.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _104.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ConsensusParams;
            fromJSON(object: any): _104.ConsensusParams;
            toJSON(message: _104.ConsensusParams): unknown;
            fromPartial(object: Partial<_104.ConsensusParams>): _104.ConsensusParams;
        };
        BlockParams: {
            encode(message: _104.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BlockParams;
            fromJSON(object: any): _104.BlockParams;
            toJSON(message: _104.BlockParams): unknown;
            fromPartial(object: Partial<_104.BlockParams>): _104.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _104.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.LastCommitInfo;
            fromJSON(object: any): _104.LastCommitInfo;
            toJSON(message: _104.LastCommitInfo): unknown;
            fromPartial(object: Partial<_104.LastCommitInfo>): _104.LastCommitInfo;
        };
        Event: {
            encode(message: _104.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Event;
            fromJSON(object: any): _104.Event;
            toJSON(message: _104.Event): unknown;
            fromPartial(object: Partial<_104.Event>): _104.Event;
        };
        EventAttribute: {
            encode(message: _104.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EventAttribute;
            fromJSON(object: any): _104.EventAttribute;
            toJSON(message: _104.EventAttribute): unknown;
            fromPartial(object: Partial<_104.EventAttribute>): _104.EventAttribute;
        };
        TxResult: {
            encode(message: _104.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.TxResult;
            fromJSON(object: any): _104.TxResult;
            toJSON(message: _104.TxResult): unknown;
            fromPartial(object: Partial<_104.TxResult>): _104.TxResult;
        };
        Validator: {
            encode(message: _104.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Validator;
            fromJSON(object: any): _104.Validator;
            toJSON(message: _104.Validator): unknown;
            fromPartial(object: Partial<_104.Validator>): _104.Validator;
        };
        ValidatorUpdate: {
            encode(message: _104.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ValidatorUpdate;
            fromJSON(object: any): _104.ValidatorUpdate;
            toJSON(message: _104.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_104.ValidatorUpdate>): _104.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _104.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.VoteInfo;
            fromJSON(object: any): _104.VoteInfo;
            toJSON(message: _104.VoteInfo): unknown;
            fromPartial(object: Partial<_104.VoteInfo>): _104.VoteInfo;
        };
        Evidence: {
            encode(message: _104.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Evidence;
            fromJSON(object: any): _104.Evidence;
            toJSON(message: _104.Evidence): unknown;
            fromPartial(object: Partial<_104.Evidence>): _104.Evidence;
        };
        Snapshot: {
            encode(message: _104.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Snapshot;
            fromJSON(object: any): _104.Snapshot;
            toJSON(message: _104.Snapshot): unknown;
            fromPartial(object: Partial<_104.Snapshot>): _104.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _106.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Proof;
            fromJSON(object: any): _106.Proof;
            toJSON(message: _106.Proof): unknown;
            fromPartial(object: Partial<_106.Proof>): _106.Proof;
        };
        ValueOp: {
            encode(message: _106.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValueOp;
            fromJSON(object: any): _106.ValueOp;
            toJSON(message: _106.ValueOp): unknown;
            fromPartial(object: Partial<_106.ValueOp>): _106.ValueOp;
        };
        DominoOp: {
            encode(message: _106.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DominoOp;
            fromJSON(object: any): _106.DominoOp;
            toJSON(message: _106.DominoOp): unknown;
            fromPartial(object: Partial<_106.DominoOp>): _106.DominoOp;
        };
        ProofOp: {
            encode(message: _106.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ProofOp;
            fromJSON(object: any): _106.ProofOp;
            toJSON(message: _106.ProofOp): unknown;
            fromPartial(object: Partial<_106.ProofOp>): _106.ProofOp;
        };
        ProofOps: {
            encode(message: _106.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ProofOps;
            fromJSON(object: any): _106.ProofOps;
            toJSON(message: _106.ProofOps): unknown;
            fromPartial(object: Partial<_106.ProofOps>): _106.ProofOps;
        };
        PublicKey: {
            encode(message: _105.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.PublicKey;
            fromJSON(object: any): _105.PublicKey;
            toJSON(message: _105.PublicKey): unknown;
            fromPartial(object: Partial<_105.PublicKey>): _105.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _107.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.BitArray;
                fromJSON(object: any): _107.BitArray;
                toJSON(message: _107.BitArray): unknown;
                fromPartial(object: Partial<_107.BitArray>): _107.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _108.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ProtocolVersion;
            fromJSON(object: any): _108.ProtocolVersion;
            toJSON(message: _108.ProtocolVersion): unknown;
            fromPartial(object: Partial<_108.ProtocolVersion>): _108.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _108.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.NodeInfo;
            fromJSON(object: any): _108.NodeInfo;
            toJSON(message: _108.NodeInfo): unknown;
            fromPartial(object: Partial<_108.NodeInfo>): _108.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _108.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.NodeInfoOther;
            fromJSON(object: any): _108.NodeInfoOther;
            toJSON(message: _108.NodeInfoOther): unknown;
            fromPartial(object: Partial<_108.NodeInfoOther>): _108.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _108.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PeerInfo;
            fromJSON(object: any): _108.PeerInfo;
            toJSON(message: _108.PeerInfo): unknown;
            fromPartial(object: Partial<_108.PeerInfo>): _108.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _108.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PeerAddressInfo;
            fromJSON(object: any): _108.PeerAddressInfo;
            toJSON(message: _108.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_108.PeerAddressInfo>): _108.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _113.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ValidatorSet;
            fromJSON(object: any): _113.ValidatorSet;
            toJSON(message: _113.ValidatorSet): unknown;
            fromPartial(object: Partial<_113.ValidatorSet>): _113.ValidatorSet;
        };
        Validator: {
            encode(message: _113.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Validator;
            fromJSON(object: any): _113.Validator;
            toJSON(message: _113.Validator): unknown;
            fromPartial(object: Partial<_113.Validator>): _113.Validator;
        };
        SimpleValidator: {
            encode(message: _113.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SimpleValidator;
            fromJSON(object: any): _113.SimpleValidator;
            toJSON(message: _113.SimpleValidator): unknown;
            fromPartial(object: Partial<_113.SimpleValidator>): _113.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _112.BlockIDFlag;
        blockIDFlagToJSON(object: _112.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _112.SignedMsgType;
        signedMsgTypeToJSON(object: _112.SignedMsgType): string;
        BlockIDFlag: typeof _112.BlockIDFlag;
        BlockIDFlagSDKType: typeof _112.BlockIDFlagSDKType;
        SignedMsgType: typeof _112.SignedMsgType;
        SignedMsgTypeSDKType: typeof _112.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _112.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PartSetHeader;
            fromJSON(object: any): _112.PartSetHeader;
            toJSON(message: _112.PartSetHeader): unknown;
            fromPartial(object: Partial<_112.PartSetHeader>): _112.PartSetHeader;
        };
        Part: {
            encode(message: _112.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Part;
            fromJSON(object: any): _112.Part;
            toJSON(message: _112.Part): unknown;
            fromPartial(object: Partial<_112.Part>): _112.Part;
        };
        BlockID: {
            encode(message: _112.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.BlockID;
            fromJSON(object: any): _112.BlockID;
            toJSON(message: _112.BlockID): unknown;
            fromPartial(object: Partial<_112.BlockID>): _112.BlockID;
        };
        Header: {
            encode(message: _112.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Header;
            fromJSON(object: any): _112.Header;
            toJSON(message: _112.Header): unknown;
            fromPartial(object: Partial<_112.Header>): _112.Header;
        };
        Data: {
            encode(message: _112.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Data;
            fromJSON(object: any): _112.Data;
            toJSON(message: _112.Data): unknown;
            fromPartial(object: Partial<_112.Data>): _112.Data;
        };
        Vote: {
            encode(message: _112.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Vote;
            fromJSON(object: any): _112.Vote;
            toJSON(message: _112.Vote): unknown;
            fromPartial(object: Partial<_112.Vote>): _112.Vote;
        };
        Commit: {
            encode(message: _112.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Commit;
            fromJSON(object: any): _112.Commit;
            toJSON(message: _112.Commit): unknown;
            fromPartial(object: Partial<_112.Commit>): _112.Commit;
        };
        CommitSig: {
            encode(message: _112.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.CommitSig;
            fromJSON(object: any): _112.CommitSig;
            toJSON(message: _112.CommitSig): unknown;
            fromPartial(object: Partial<_112.CommitSig>): _112.CommitSig;
        };
        Proposal: {
            encode(message: _112.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Proposal;
            fromJSON(object: any): _112.Proposal;
            toJSON(message: _112.Proposal): unknown;
            fromPartial(object: Partial<_112.Proposal>): _112.Proposal;
        };
        SignedHeader: {
            encode(message: _112.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.SignedHeader;
            fromJSON(object: any): _112.SignedHeader;
            toJSON(message: _112.SignedHeader): unknown;
            fromPartial(object: Partial<_112.SignedHeader>): _112.SignedHeader;
        };
        LightBlock: {
            encode(message: _112.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.LightBlock;
            fromJSON(object: any): _112.LightBlock;
            toJSON(message: _112.LightBlock): unknown;
            fromPartial(object: Partial<_112.LightBlock>): _112.LightBlock;
        };
        BlockMeta: {
            encode(message: _112.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.BlockMeta;
            fromJSON(object: any): _112.BlockMeta;
            toJSON(message: _112.BlockMeta): unknown;
            fromPartial(object: Partial<_112.BlockMeta>): _112.BlockMeta;
        };
        TxProof: {
            encode(message: _112.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.TxProof;
            fromJSON(object: any): _112.TxProof;
            toJSON(message: _112.TxProof): unknown;
            fromPartial(object: Partial<_112.TxProof>): _112.TxProof;
        };
        ConsensusParams: {
            encode(message: _111.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConsensusParams;
            fromJSON(object: any): _111.ConsensusParams;
            toJSON(message: _111.ConsensusParams): unknown;
            fromPartial(object: Partial<_111.ConsensusParams>): _111.ConsensusParams;
        };
        BlockParams: {
            encode(message: _111.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.BlockParams;
            fromJSON(object: any): _111.BlockParams;
            toJSON(message: _111.BlockParams): unknown;
            fromPartial(object: Partial<_111.BlockParams>): _111.BlockParams;
        };
        EvidenceParams: {
            encode(message: _111.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EvidenceParams;
            fromJSON(object: any): _111.EvidenceParams;
            toJSON(message: _111.EvidenceParams): unknown;
            fromPartial(object: Partial<_111.EvidenceParams>): _111.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _111.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ValidatorParams;
            fromJSON(object: any): _111.ValidatorParams;
            toJSON(message: _111.ValidatorParams): unknown;
            fromPartial(object: Partial<_111.ValidatorParams>): _111.ValidatorParams;
        };
        VersionParams: {
            encode(message: _111.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.VersionParams;
            fromJSON(object: any): _111.VersionParams;
            toJSON(message: _111.VersionParams): unknown;
            fromPartial(object: Partial<_111.VersionParams>): _111.VersionParams;
        };
        HashedParams: {
            encode(message: _111.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.HashedParams;
            fromJSON(object: any): _111.HashedParams;
            toJSON(message: _111.HashedParams): unknown;
            fromPartial(object: Partial<_111.HashedParams>): _111.HashedParams;
        };
        Evidence: {
            encode(message: _110.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Evidence;
            fromJSON(object: any): _110.Evidence;
            toJSON(message: _110.Evidence): unknown;
            fromPartial(object: Partial<_110.Evidence>): _110.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _110.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DuplicateVoteEvidence;
            fromJSON(object: any): _110.DuplicateVoteEvidence;
            toJSON(message: _110.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_110.DuplicateVoteEvidence>): _110.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _110.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.LightClientAttackEvidence;
            fromJSON(object: any): _110.LightClientAttackEvidence;
            toJSON(message: _110.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_110.LightClientAttackEvidence>): _110.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _110.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.EvidenceList;
            fromJSON(object: any): _110.EvidenceList;
            toJSON(message: _110.EvidenceList): unknown;
            fromPartial(object: Partial<_110.EvidenceList>): _110.EvidenceList;
        };
        Block: {
            encode(message: _109.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Block;
            fromJSON(object: any): _109.Block;
            toJSON(message: _109.Block): unknown;
            fromPartial(object: Partial<_109.Block>): _109.Block;
        };
    };
    const version: {
        App: {
            encode(message: _114.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.App;
            fromJSON(object: any): _114.App;
            toJSON(message: _114.App): unknown;
            fromPartial(object: Partial<_114.App>): _114.App;
        };
        Consensus: {
            encode(message: _114.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Consensus;
            fromJSON(object: any): _114.Consensus;
            toJSON(message: _114.Consensus): unknown;
            fromPartial(object: Partial<_114.Consensus>): _114.Consensus;
        };
    };
}
