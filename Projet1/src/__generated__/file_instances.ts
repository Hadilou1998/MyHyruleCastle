/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: ksUTPDuXmGrBjuZ8IfkDpFKrEZjF9shEyEHn3WPUhL/0MUipWuRH7wyc5L5wz4h0iRMZ+rIC9OsM0e6f5ItFAA==
 */

/* eslint-disable */
// tslint:disable

interface FileInstances {
  EVENT_NAME: string
  FILE_NAME: string & {readonly __brand?: 'file_instances_FILE_NAME'}
  OPEN_COUNT: number
}
export default FileInstances;

interface FileInstances_InsertParameters {
  EVENT_NAME: string
  FILE_NAME: string & {readonly __brand?: 'file_instances_FILE_NAME'}
  OPEN_COUNT: number
}
export type {FileInstances_InsertParameters}
