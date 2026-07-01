export declare const ProposalType: {
    readonly SELLPROPERTY: "SELLPROPERTY";
    readonly BUYPROPERTY: "BUYPROPERTY";
    readonly USESAFETY: "USESAFETY";
    readonly USEREINVESTMENT: "USEREINVESTMENT";
    readonly REVENUETHRESHOLDCHANGE: "REVENUETHRESHOLDCHANGE";
    readonly CHALLLENGEAUTHORITY: "CHALLLENGEAUTHORITY";
    readonly REMOVEAUTHORITY: "REMOVEAUTHORITY";
    readonly PROPOSEREMOVEPROPOSAL: "PROPOSEREMOVEPROPOSAL";
};
export type ProposalType = (typeof ProposalType)[keyof typeof ProposalType];
export declare const FundType: {
    readonly safety: "safety";
    readonly reinvestment: "reinvestment";
};
export type FundType = (typeof FundType)[keyof typeof FundType];
export declare const LeaseStatus: {
    readonly Active: "Active";
    readonly Terminated: "Terminated";
    readonly Expired: "Expired";
};
export type LeaseStatus = (typeof LeaseStatus)[keyof typeof LeaseStatus];
export declare const ReasonType: {
    readonly None: "None";
    readonly Inactivity: "Inactivity";
    readonly Other: "Other";
    readonly InvalidDocuments: "InvalidDocuments";
    readonly DuplicateIdentity: "DuplicateIdentity";
    readonly Misconduct: "Misconduct";
    readonly MaliciousVoting: "MaliciousVoting";
    readonly Fraud: "Fraud";
    readonly GovernanceDecision: "GovernanceDecision";
};
export type ReasonType = (typeof ReasonType)[keyof typeof ReasonType];
export declare const ProposalStatus: {
    readonly Draft: "Draft";
    readonly Active: "Active";
    readonly Passed: "Passed";
    readonly Failed: "Failed";
    readonly Rejected: "Rejected";
    readonly Executed: "Executed";
    readonly Pending: "Pending";
    readonly Approved: "Approved";
};
export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus];
export declare const GovernmentType: {
    readonly COUNTRY: "COUNTRY";
    readonly STATE: "STATE";
};
export type GovernmentType = (typeof GovernmentType)[keyof typeof GovernmentType];
export declare const AuthorityType: {
    readonly TRUSTEE: "TRUSTEE";
    readonly ARBITRATOR: "ARBITRATOR";
};
export type AuthorityType = (typeof AuthorityType)[keyof typeof AuthorityType];
export declare const ActionsHistory: {
    readonly None: "None";
    readonly Inactivity: "Inactivity";
    readonly Other: "Other";
    readonly InvalidDocuments: "InvalidDocuments";
    readonly DuplicateIdentity: "DuplicateIdentity";
    readonly Misconduct: "Misconduct";
    readonly MaliciousVoting: "MaliciousVoting";
    readonly Fraud: "Fraud";
    readonly GovernanceDecision: "GovernanceDecision";
};
export type ActionsHistory = (typeof ActionsHistory)[keyof typeof ActionsHistory];
//# sourceMappingURL=enums.d.ts.map