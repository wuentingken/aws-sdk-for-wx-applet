import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class DLM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DLM.Types.ClientConfiguration)
  config: Config & DLM.Types.ClientConfiguration;
  /**
   * Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
   */
  createLifecyclePolicy(params: DLM.Types.CreateLifecyclePolicyRequest, callback?: (err: AWSError, data: DLM.Types.CreateLifecyclePolicyResponse) => void): Request<DLM.Types.CreateLifecyclePolicyResponse, AWSError>;
  /**
   * Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
   */
  createLifecyclePolicy(callback?: (err: AWSError, data: DLM.Types.CreateLifecyclePolicyResponse) => void): Request<DLM.Types.CreateLifecyclePolicyResponse, AWSError>;
  /**
   * Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
   */
  deleteLifecyclePolicy(params: DLM.Types.DeleteLifecyclePolicyRequest, callback?: (err: AWSError, data: DLM.Types.DeleteLifecyclePolicyResponse) => void): Request<DLM.Types.DeleteLifecyclePolicyResponse, AWSError>;
  /**
   * Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
   */
  deleteLifecyclePolicy(callback?: (err: AWSError, data: DLM.Types.DeleteLifecyclePolicyResponse) => void): Request<DLM.Types.DeleteLifecyclePolicyResponse, AWSError>;
  /**
   * Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy.
   */
  getLifecyclePolicies(params: DLM.Types.GetLifecyclePoliciesRequest, callback?: (err: AWSError, data: DLM.Types.GetLifecyclePoliciesResponse) => void): Request<DLM.Types.GetLifecyclePoliciesResponse, AWSError>;
  /**
   * Gets summary information about all or the specified data lifecycle policies. To get complete information about a policy, use GetLifecyclePolicy.
   */
  getLifecyclePolicies(callback?: (err: AWSError, data: DLM.Types.GetLifecyclePoliciesResponse) => void): Request<DLM.Types.GetLifecyclePoliciesResponse, AWSError>;
  /**
   * Gets detailed information about the specified lifecycle policy.
   */
  getLifecyclePolicy(params: DLM.Types.GetLifecyclePolicyRequest, callback?: (err: AWSError, data: DLM.Types.GetLifecyclePolicyResponse) => void): Request<DLM.Types.GetLifecyclePolicyResponse, AWSError>;
  /**
   * Gets detailed information about the specified lifecycle policy.
   */
  getLifecyclePolicy(callback?: (err: AWSError, data: DLM.Types.GetLifecyclePolicyResponse) => void): Request<DLM.Types.GetLifecyclePolicyResponse, AWSError>;
  /**
   * Lists the tags for the specified resource.
   */
  listTagsForResource(params: DLM.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: DLM.Types.ListTagsForResourceResponse) => void): Request<DLM.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags for the specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: DLM.Types.ListTagsForResourceResponse) => void): Request<DLM.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource.
   */
  tagResource(params: DLM.Types.TagResourceRequest, callback?: (err: AWSError, data: DLM.Types.TagResourceResponse) => void): Request<DLM.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource.
   */
  tagResource(callback?: (err: AWSError, data: DLM.Types.TagResourceResponse) => void): Request<DLM.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(params: DLM.Types.UntagResourceRequest, callback?: (err: AWSError, data: DLM.Types.UntagResourceResponse) => void): Request<DLM.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: DLM.Types.UntagResourceResponse) => void): Request<DLM.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the specified lifecycle policy.
   */
  updateLifecyclePolicy(params: DLM.Types.UpdateLifecyclePolicyRequest, callback?: (err: AWSError, data: DLM.Types.UpdateLifecyclePolicyResponse) => void): Request<DLM.Types.UpdateLifecyclePolicyResponse, AWSError>;
  /**
   * Updates the specified lifecycle policy.
   */
  updateLifecyclePolicy(callback?: (err: AWSError, data: DLM.Types.UpdateLifecyclePolicyResponse) => void): Request<DLM.Types.UpdateLifecyclePolicyResponse, AWSError>;
}
declare namespace DLM {
  export interface Action {
    /**
     * A descriptive name for the action.
     */
    Name: ActionName;
    /**
     * The rule for copying shared snapshots across Regions.
     */
    CrossRegionCopy: CrossRegionCopyActionList;
  }
  export type ActionList = Action[];
  export type ActionName = string;
  export type AvailabilityZone = string;
  export type AvailabilityZoneList = AvailabilityZone[];
  export type AwsAccountId = string;
  export type CmkArn = string;
  export type CopyTags = boolean;
  export type CopyTagsNullable = boolean;
  export type Count = number;
  export interface CreateLifecyclePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     */
    ExecutionRoleArn: ExecutionRoleArn;
    /**
     * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
     */
    Description: PolicyDescription;
    /**
     * The desired activation state of the lifecycle policy after creation.
     */
    State: SettablePolicyStateValues;
    /**
     * The configuration details of the lifecycle policy.
     */
    PolicyDetails: PolicyDetails;
    /**
     * The tags to apply to the lifecycle policy during creation.
     */
    Tags?: TagMap;
  }
  export interface CreateLifecyclePolicyResponse {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId?: PolicyId;
  }
  export interface CreateRule {
    /**
     * Specifies the destination for snapshots created by the policy. To create snapshots in the same Region as the source resource, specify CLOUD. To create snapshots on the same Outpost as the source resource, specify OUTPOST_LOCAL. If you omit this parameter, CLOUD is used by default. If the policy targets resources in an Amazon Web Services Region, then you must create snapshots in the same Region as the source resource. If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost as the source resource, or in the Region of that Outpost.
     */
    Location?: LocationValues;
    /**
     * The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.
     */
    Interval?: Interval;
    /**
     * The interval unit.
     */
    IntervalUnit?: IntervalUnitValues;
    /**
     * The time, in UTC, to start the operation. The supported format is hh:mm. The operation occurs within a one-hour window following the specified time. If you do not specify a time, Amazon DLM selects a time within the next 24 hours.
     */
    Times?: TimesList;
    /**
     * The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1 year. For more information, see Cron expressions in the Amazon CloudWatch User Guide.
     */
    CronExpression?: CronExpression;
  }
  export type CronExpression = string;
  export interface CrossRegionCopyAction {
    /**
     * The target Region.
     */
    Target: Target;
    /**
     * The encryption settings for the copied snapshot.
     */
    EncryptionConfiguration: EncryptionConfiguration;
    RetainRule?: CrossRegionCopyRetainRule;
  }
  export type CrossRegionCopyActionList = CrossRegionCopyAction[];
  export interface CrossRegionCopyDeprecateRule {
    /**
     * The period after which to deprecate the cross-Region AMI copies. The period must be less than or equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
     */
    Interval?: Interval;
    /**
     * The unit of time in which to measure the Interval.
     */
    IntervalUnit?: RetentionIntervalUnitValues;
  }
  export interface CrossRegionCopyRetainRule {
    /**
     * The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
     */
    Interval?: Interval;
    /**
     * The unit of time for time-based retention.
     */
    IntervalUnit?: RetentionIntervalUnitValues;
  }
  export interface CrossRegionCopyRule {
    /**
     * Avoid using this parameter when creating new policies. Instead, use Target to specify a target Region or a target Outpost for snapshot copies. For policies created before the Target parameter was introduced, this parameter indicates the target Region for snapshot copies.
     */
    TargetRegion?: TargetRegion;
    /**
     * The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies. Use this parameter instead of TargetRegion. Do not specify both.
     */
    Target?: Target;
    /**
     * To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or if encryption by default is not enabled.
     */
    Encrypted: Encrypted;
    /**
     * The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
     */
    CmkArn?: CmkArn;
    /**
     * Indicates whether to copy all user-defined tags from the source snapshot to the cross-Region snapshot copy.
     */
    CopyTags?: CopyTagsNullable;
    /**
     * The retention rule that indicates how long snapshot copies are to be retained in the destination Region.
     */
    RetainRule?: CrossRegionCopyRetainRule;
    /**
     * The AMI deprecation rule for cross-Region AMI copies created by the rule.
     */
    DeprecateRule?: CrossRegionCopyDeprecateRule;
  }
  export type CrossRegionCopyRules = CrossRegionCopyRule[];
  export interface DeleteLifecyclePolicyRequest {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId: PolicyId;
  }
  export interface DeleteLifecyclePolicyResponse {
  }
  export interface DeprecateRule {
    /**
     * If the schedule has a count-based retention rule, this parameter specifies the number of oldest AMIs to deprecate. The count must be less than or equal to the schedule's retention count, and it can't be greater than 1000.
     */
    Count?: Count;
    /**
     * If the schedule has an age-based retention rule, this parameter specifies the period after which to deprecate AMIs created by the schedule. The period must be less than or equal to the schedule's retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
     */
    Interval?: Interval;
    /**
     * The unit of time in which to measure the Interval.
     */
    IntervalUnit?: RetentionIntervalUnitValues;
  }
  export type DescriptionRegex = string;
  export type Encrypted = boolean;
  export interface EncryptionConfiguration {
    /**
     * To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or when encryption by default is not enabled.
     */
    Encrypted: Encrypted;
    /**
     * The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
     */
    CmkArn?: CmkArn;
  }
  export interface EventParameters {
    /**
     * The type of event. Currently, only snapshot sharing events are supported.
     */
    EventType: EventTypeValues;
    /**
     * The IDs of the Amazon Web Services accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified Amazon Web Services accounts shares a snapshot with your account.
     */
    SnapshotOwner: SnapshotOwnerList;
    /**
     * The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account. For example, specifying ^.*Created for policy: policy-1234567890abcdef0.*$ configures the policy to run only if snapshots created by policy policy-1234567890abcdef0 are shared with your account.
     */
    DescriptionRegex: DescriptionRegex;
  }
  export interface EventSource {
    /**
     * The source of the event. Currently only managed CloudWatch Events rules are supported.
     */
    Type: EventSourceValues;
    /**
     * Information about the event.
     */
    Parameters?: EventParameters;
  }
  export type EventSourceValues = "MANAGED_CWE"|string;
  export type EventTypeValues = "shareSnapshot"|string;
  export type ExcludeBootVolume = boolean;
  export type ExecutionRoleArn = string;
  export interface FastRestoreRule {
    /**
     * The number of snapshots to be enabled with fast snapshot restore.
     */
    Count?: Count;
    /**
     * The amount of time to enable fast snapshot restore. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
     */
    Interval?: Interval;
    /**
     * The unit of time for enabling fast snapshot restore.
     */
    IntervalUnit?: RetentionIntervalUnitValues;
    /**
     * The Availability Zones in which to enable fast snapshot restore.
     */
    AvailabilityZones: AvailabilityZoneList;
  }
  export interface GetLifecyclePoliciesRequest {
    /**
     * The identifiers of the data lifecycle policies.
     */
    PolicyIds?: PolicyIdList;
    /**
     * The activation state.
     */
    State?: GettablePolicyStateValues;
    /**
     * The resource type.
     */
    ResourceTypes?: ResourceTypeValuesList;
    /**
     * The target tag for a policy. Tags are strings in the format key=value.
     */
    TargetTags?: TargetTagsFilterList;
    /**
     * The tags to add to objects created by the policy. Tags are strings in the format key=value. These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags.
     */
    TagsToAdd?: TagsToAddFilterList;
  }
  export interface GetLifecyclePoliciesResponse {
    /**
     * Summary information about the lifecycle policies.
     */
    Policies?: LifecyclePolicySummaryList;
  }
  export interface GetLifecyclePolicyRequest {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId: PolicyId;
  }
  export interface GetLifecyclePolicyResponse {
    /**
     * Detailed information about the lifecycle policy.
     */
    Policy?: LifecyclePolicy;
  }
  export type GettablePolicyStateValues = "ENABLED"|"DISABLED"|"ERROR"|string;
  export type Interval = number;
  export type IntervalUnitValues = "HOURS"|string;
  export interface LifecyclePolicy {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId?: PolicyId;
    /**
     * The description of the lifecycle policy.
     */
    Description?: PolicyDescription;
    /**
     * The activation state of the lifecycle policy.
     */
    State?: GettablePolicyStateValues;
    /**
     * The description of the status.
     */
    StatusMessage?: StatusMessage;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     */
    ExecutionRoleArn?: ExecutionRoleArn;
    /**
     * The local date and time when the lifecycle policy was created.
     */
    DateCreated?: Timestamp;
    /**
     * The local date and time when the lifecycle policy was last modified.
     */
    DateModified?: Timestamp;
    /**
     * The configuration of the lifecycle policy
     */
    PolicyDetails?: PolicyDetails;
    /**
     * The tags.
     */
    Tags?: TagMap;
    /**
     * The Amazon Resource Name (ARN) of the policy.
     */
    PolicyArn?: PolicyArn;
  }
  export interface LifecyclePolicySummary {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId?: PolicyId;
    /**
     * The description of the lifecycle policy.
     */
    Description?: PolicyDescription;
    /**
     * The activation state of the lifecycle policy.
     */
    State?: GettablePolicyStateValues;
    /**
     * The tags.
     */
    Tags?: TagMap;
    /**
     * The type of policy. EBS_SNAPSHOT_MANAGEMENT indicates that the policy manages the lifecycle of Amazon EBS snapshots. IMAGE_MANAGEMENT indicates that the policy manages the lifecycle of EBS-backed AMIs.
     */
    PolicyType?: PolicyTypeValues;
  }
  export type LifecyclePolicySummaryList = LifecyclePolicySummary[];
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: PolicyArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Information about the tags.
     */
    Tags?: TagMap;
  }
  export type LocationValues = "CLOUD"|"OUTPOST_LOCAL"|string;
  export type NoReboot = boolean;
  export interface Parameters {
    /**
     * [EBS Snapshot Management – Instance policies only] Indicates whether to exclude the root volume from snapshots created using CreateSnapshots. The default is false.
     */
    ExcludeBootVolume?: ExcludeBootVolume;
    /**
     * Applies to AMI lifecycle policies only. Indicates whether targeted instances are rebooted when the lifecycle policy runs. true indicates that targeted instances are not rebooted when the policy runs. false indicates that target instances are rebooted when the policy runs. The default is true (instances are not rebooted).
     */
    NoReboot?: NoReboot;
  }
  export type PolicyArn = string;
  export type PolicyDescription = string;
  export interface PolicyDetails {
    /**
     * The valid target resource types and actions a policy can manage. Specify EBS_SNAPSHOT_MANAGEMENT to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify IMAGE_MANAGEMENT to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify EVENT_BASED_POLICY  to create an event-based policy that performs specific actions when a defined event occurs in your Amazon Web Services account. The default is EBS_SNAPSHOT_MANAGEMENT.
     */
    PolicyType?: PolicyTypeValues;
    /**
     * The target resource type for snapshot and AMI lifecycle policies. Use VOLUME to create snapshots of individual volumes or use INSTANCE to create multi-volume snapshots from the volumes for an instance. This parameter is required for snapshot and AMI policies only. If you are creating an event-based policy, omit this parameter.
     */
    ResourceTypes?: ResourceTypeValuesList;
    /**
     * The location of the resources to backup. If the source resources are located in an Amazon Web Services Region, specify CLOUD. If the source resources are located on an Outpost in your account, specify OUTPOST.  If you specify OUTPOST, Amazon Data Lifecycle Manager backs up all resources of the specified type with matching target tags across all of the Outposts in your account.
     */
    ResourceLocations?: ResourceLocationList;
    /**
     * The single tag that identifies targeted resources for this policy. This parameter is required for snapshot and AMI policies only. If you are creating an event-based policy, omit this parameter.
     */
    TargetTags?: TargetTagList;
    /**
     * The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy can have up to four schedules—one mandatory schedule and up to three optional schedules. This parameter is required for snapshot and AMI policies only. If you are creating an event-based policy, omit this parameter.
     */
    Schedules?: ScheduleList;
    /**
     * A set of optional parameters for snapshot and AMI lifecycle policies.  This parameter is required for snapshot and AMI policies only. If you are creating an event-based policy, omit this parameter.
     */
    Parameters?: Parameters;
    /**
     * The event that triggers the event-based policy.  This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter.
     */
    EventSource?: EventSource;
    /**
     * The actions to be performed when the event-based policy is triggered. You can specify only one action per policy. This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter.
     */
    Actions?: ActionList;
  }
  export type PolicyId = string;
  export type PolicyIdList = PolicyId[];
  export type PolicyTypeValues = "EBS_SNAPSHOT_MANAGEMENT"|"IMAGE_MANAGEMENT"|"EVENT_BASED_POLICY"|string;
  export type ResourceLocationList = ResourceLocationValues[];
  export type ResourceLocationValues = "CLOUD"|"OUTPOST"|string;
  export type ResourceTypeValues = "VOLUME"|"INSTANCE"|string;
  export type ResourceTypeValuesList = ResourceTypeValues[];
  export interface RetainRule {
    /**
     * The number of snapshots to retain for each volume, up to a maximum of 1000.
     */
    Count?: Count;
    /**
     * The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
     */
    Interval?: Interval;
    /**
     * The unit of time for time-based retention.
     */
    IntervalUnit?: RetentionIntervalUnitValues;
  }
  export type RetentionIntervalUnitValues = "DAYS"|"WEEKS"|"MONTHS"|"YEARS"|string;
  export interface Schedule {
    /**
     * The name of the schedule.
     */
    Name?: ScheduleName;
    /**
     * Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
     */
    CopyTags?: CopyTags;
    /**
     * The tags to apply to policy-created resources. These user-defined tags are in addition to the Amazon Web Services-added lifecycle tags.
     */
    TagsToAdd?: TagsToAddList;
    /**
     * A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: $(instance-id) or $(timestamp). Variable tags are only valid for EBS Snapshot Management – Instance policies.
     */
    VariableTags?: VariableTagsList;
    /**
     * The creation rule.
     */
    CreateRule?: CreateRule;
    /**
     * The retention rule.
     */
    RetainRule?: RetainRule;
    /**
     * The rule for enabling fast snapshot restore.
     */
    FastRestoreRule?: FastRestoreRule;
    /**
     * The rule for cross-Region snapshot copies. You can only specify cross-Region copy rules for policies that create snapshots in a Region. If the policy creates snapshots on an Outpost, then you cannot copy the snapshots to a Region or to an Outpost. If the policy creates snapshots in a Region, then snapshots can be copied to up to three Regions or Outposts.
     */
    CrossRegionCopyRules?: CrossRegionCopyRules;
    /**
     * The rule for sharing snapshots with other Amazon Web Services accounts.
     */
    ShareRules?: ShareRules;
    /**
     * The AMI deprecation rule for the schedule.
     */
    DeprecateRule?: DeprecateRule;
  }
  export type ScheduleList = Schedule[];
  export type ScheduleName = string;
  export type SettablePolicyStateValues = "ENABLED"|"DISABLED"|string;
  export interface ShareRule {
    /**
     * The IDs of the Amazon Web Services accounts with which to share the snapshots.
     */
    TargetAccounts: ShareTargetAccountList;
    /**
     * The period after which snapshots that are shared with other Amazon Web Services accounts are automatically unshared.
     */
    UnshareInterval?: Interval;
    /**
     * The unit of time for the automatic unsharing interval.
     */
    UnshareIntervalUnit?: RetentionIntervalUnitValues;
  }
  export type ShareRules = ShareRule[];
  export type ShareTargetAccountList = AwsAccountId[];
  export type SnapshotOwnerList = AwsAccountId[];
  export type StatusMessage = string;
  export type String = string;
  export interface Tag {
    /**
     * The tag key.
     */
    Key: String;
    /**
     * The tag value.
     */
    Value: String;
  }
  export type TagFilter = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: PolicyArn;
    /**
     * One or more tags.
     */
    Tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TagsToAddFilterList = TagFilter[];
  export type TagsToAddList = Tag[];
  export type Target = string;
  export type TargetRegion = string;
  export type TargetTagList = Tag[];
  export type TargetTagsFilterList = TagFilter[];
  export type Time = string;
  export type TimesList = Time[];
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: PolicyArn;
    /**
     * The tag keys.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateLifecyclePolicyRequest {
    /**
     * The identifier of the lifecycle policy.
     */
    PolicyId: PolicyId;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     */
    ExecutionRoleArn?: ExecutionRoleArn;
    /**
     * The desired activation state of the lifecycle policy after creation.
     */
    State?: SettablePolicyStateValues;
    /**
     * A description of the lifecycle policy.
     */
    Description?: PolicyDescription;
    /**
     * The configuration of the lifecycle policy. You cannot update the policy type or the resource type.
     */
    PolicyDetails?: PolicyDetails;
  }
  export interface UpdateLifecyclePolicyResponse {
  }
  export type VariableTagsList = Tag[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-01-12"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DLM client.
   */
  export import Types = DLM;
}
export = DLM;
