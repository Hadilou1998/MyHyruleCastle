/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: iwDk+rBv2XgHWu5YezWVR8I37rh21GoOBZP77ebC2to1XQTTNO36T0P9DAN7nWdRLxzM+SoXuS26PqwMK1SmDQ==
 */

/* eslint-disable */
// tslint:disable

interface SessionConnectAttrs {
  ATTR_NAME: string & {readonly __brand?: 'session_connect_attrs_ATTR_NAME'}
  ATTR_VALUE: (string) | null
  ORDINAL_POSITION: (number) | null
  PROCESSLIST_ID: (string | number | BigInt) & {readonly __brand?: 'session_connect_attrs_PROCESSLIST_ID'}
}
export default SessionConnectAttrs;

interface SessionConnectAttrs_InsertParameters {
  ATTR_NAME: string & {readonly __brand?: 'session_connect_attrs_ATTR_NAME'}
  ATTR_VALUE?: (string) | null
  ORDINAL_POSITION?: (number) | null
  PROCESSLIST_ID: (string | number | BigInt) & {readonly __brand?: 'session_connect_attrs_PROCESSLIST_ID'}
}
export type {SessionConnectAttrs_InsertParameters}