/**
 * Copyright (c) 2017 The Bacardi Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface TypeInfo {
  readonly sequence: boolean;
  readonly generic?: string;
  readonly idlType: string;
  readonly nullable: boolean;
  readonly union: boolean;
}

export interface ArgumentInfo {
  readonly optional: boolean;
  readonly variadic: boolean;
  readonly idlType: TypeInfo;
  readonly name: string;
}

export interface InterfaceInfo {
  readonly type: 'interface';
  readonly name: string;
  partial: boolean;
  members: InterfaceMemberInfo[];
  inheritance: string;
}

export interface OperationMemberInfo {
  readonly type: 'operation';
  readonly getter: boolean;
  readonly setter: boolean;
  readonly deleter: boolean;
  readonly static: boolean;
  readonly stringifier: boolean;
  readonly idlType: TypeInfo;
  readonly name: string;
  readonly arguments: ArgumentInfo[];
}

export interface DictionaryInfo {
  readonly type: 'dictionary';
  readonly name: string;
  partial: boolean;
  members: DictionaryMemberInfo[];
  inheritance: string;
}

export interface DictionaryMemberInfo {
  readonly type: 'field';
  readonly name: string;
  readonly required: boolean;
  readonly idlType: TypeInfo;
  readonly default: TypeValue;
}

export interface EnumInfo {
  readonly type: 'enum';
  readonly name: string;
  readonly values: TypeValue[];
}

export interface TypeValue {
  readonly type: string;
  readonly value: string;
}

export type InterfaceMemberInfo = OperationMemberInfo;
export type DefinitionInfo = InterfaceInfo | DictionaryInfo | EnumInfo;
