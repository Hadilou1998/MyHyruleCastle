/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: gYdS0PN0YkA7ZbycJ7+2FZSuMf+HxfkcLVTflSYNj0GQT0Kzuw5+mB1SKDguzOP7z0dtaXEqapNRJ/m2gxTmkg==
 */

/* eslint-disable */
// tslint:disable

/**
 * Components
 */
interface Component {
  component_group_id: number
  component_id: number & {readonly __brand?: 'component_component_id'}
  component_urn: string
}
export default Component;

/**
 * Components
 */
interface Component_InsertParameters {
  component_group_id: number
  component_id: number & {readonly __brand?: 'component_component_id'}
  component_urn: string
}
export type {Component_InsertParameters}
