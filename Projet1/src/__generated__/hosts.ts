/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: fdqYDNPNK4d/5m6kRcJlhHjcslMQ5cu9CJPaL/q/EaTl3w3BRLYp+yG32VcG3C9LzMRTRBFpUAttCicqDZEAEw==
 */

/* eslint-disable */
// tslint:disable

interface Hosts {
  CURRENT_CONNECTIONS: (string | number | BigInt)
  HOST: (string) | null
  MAX_SESSION_CONTROLLED_MEMORY: (string | number | BigInt)
  MAX_SESSION_TOTAL_MEMORY: (string | number | BigInt)
  TOTAL_CONNECTIONS: (string | number | BigInt)
}
export default Hosts;

interface Hosts_InsertParameters {
  CURRENT_CONNECTIONS: (string | number | BigInt)
  HOST?: (string) | null
  MAX_SESSION_CONTROLLED_MEMORY: (string | number | BigInt)
  MAX_SESSION_TOTAL_MEMORY: (string | number | BigInt)
  TOTAL_CONNECTIONS: (string | number | BigInt)
}
export type {Hosts_InsertParameters}
