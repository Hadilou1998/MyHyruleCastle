/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: oU7dGrn43HA4pr/qtiNCyDl0jcPK04FB8sPwglBuscjRndiGB/qkWVlA17CW8GOvpKtwDT4gpwsOXDUixkxfFw==
 */

/* eslint-disable */
// tslint:disable

/**
 * Worker Information
 */
interface SlaveWorkerInfo {
  /**
   * The channel on which the replica is connected to a source. Used in Multisource Replication
   */
  Channel_name: string & {readonly __brand?: 'slave_worker_info_Channel_name'}
  Checkpoint_group_bitmap: unknown
  Checkpoint_group_size: number
  Checkpoint_master_log_name: string
  Checkpoint_master_log_pos: (string | number | BigInt)
  Checkpoint_relay_log_name: string
  Checkpoint_relay_log_pos: (string | number | BigInt)
  Checkpoint_seqno: number
  Id: number & {readonly __brand?: 'slave_worker_info_Id'}
  Master_log_name: string
  Master_log_pos: (string | number | BigInt)
  Relay_log_name: string
  Relay_log_pos: (string | number | BigInt)
}
export default SlaveWorkerInfo;

/**
 * Worker Information
 */
interface SlaveWorkerInfo_InsertParameters {
  /**
   * The channel on which the replica is connected to a source. Used in Multisource Replication
   */
  Channel_name: string & {readonly __brand?: 'slave_worker_info_Channel_name'}
  Checkpoint_group_bitmap: unknown
  Checkpoint_group_size: number
  Checkpoint_master_log_name: string
  Checkpoint_master_log_pos: (string | number | BigInt)
  Checkpoint_relay_log_name: string
  Checkpoint_relay_log_pos: (string | number | BigInt)
  Checkpoint_seqno: number
  Id: number & {readonly __brand?: 'slave_worker_info_Id'}
  Master_log_name: string
  Master_log_pos: (string | number | BigInt)
  Relay_log_name: string
  Relay_log_pos: (string | number | BigInt)
}
export type {SlaveWorkerInfo_InsertParameters}