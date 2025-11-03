
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model SchoolAssignment
 * 
 */
export type SchoolAssignment = $Result.DefaultSelection<Prisma.$SchoolAssignmentPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Visit
 * 
 */
export type Visit = $Result.DefaultSelection<Prisma.$VisitPayload>
/**
 * Model VisitPhoto
 * 
 */
export type VisitPhoto = $Result.DefaultSelection<Prisma.$VisitPhotoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schoolAssignment`: Exposes CRUD operations for the **SchoolAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolAssignments
    * const schoolAssignments = await prisma.schoolAssignment.findMany()
    * ```
    */
  get schoolAssignment(): Prisma.SchoolAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visit`: Exposes CRUD operations for the **Visit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visits
    * const visits = await prisma.visit.findMany()
    * ```
    */
  get visit(): Prisma.VisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitPhoto`: Exposes CRUD operations for the **VisitPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitPhotos
    * const visitPhotos = await prisma.visitPhoto.findMany()
    * ```
    */
  get visitPhoto(): Prisma.VisitPhotoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    School: 'School',
    SchoolAssignment: 'SchoolAssignment',
    Device: 'Device',
    Visit: 'Visit',
    VisitPhoto: 'VisitPhoto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "school" | "schoolAssignment" | "device" | "visit" | "visitPhoto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      SchoolAssignment: {
        payload: Prisma.$SchoolAssignmentPayload<ExtArgs>
        fields: Prisma.SchoolAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload>
          }
          findFirst: {
            args: Prisma.SchoolAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload>
          }
          findMany: {
            args: Prisma.SchoolAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload>[]
          }
          create: {
            args: Prisma.SchoolAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload>
          }
          createMany: {
            args: Prisma.SchoolAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload>[]
          }
          delete: {
            args: Prisma.SchoolAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload>
          }
          update: {
            args: Prisma.SchoolAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.SchoolAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.SchoolAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolAssignmentPayload>
          }
          aggregate: {
            args: Prisma.SchoolAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolAssignment>
          }
          groupBy: {
            args: Prisma.SchoolAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Visit: {
        payload: Prisma.$VisitPayload<ExtArgs>
        fields: Prisma.VisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findFirst: {
            args: Prisma.VisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findMany: {
            args: Prisma.VisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          create: {
            args: Prisma.VisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          createMany: {
            args: Prisma.VisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          delete: {
            args: Prisma.VisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          update: {
            args: Prisma.VisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          deleteMany: {
            args: Prisma.VisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          upsert: {
            args: Prisma.VisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          aggregate: {
            args: Prisma.VisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisit>
          }
          groupBy: {
            args: Prisma.VisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitCountArgs<ExtArgs>
            result: $Utils.Optional<VisitCountAggregateOutputType> | number
          }
        }
      }
      VisitPhoto: {
        payload: Prisma.$VisitPhotoPayload<ExtArgs>
        fields: Prisma.VisitPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload>
          }
          findFirst: {
            args: Prisma.VisitPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload>
          }
          findMany: {
            args: Prisma.VisitPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload>[]
          }
          create: {
            args: Prisma.VisitPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload>
          }
          createMany: {
            args: Prisma.VisitPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload>[]
          }
          delete: {
            args: Prisma.VisitPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload>
          }
          update: {
            args: Prisma.VisitPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload>
          }
          deleteMany: {
            args: Prisma.VisitPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload>[]
          }
          upsert: {
            args: Prisma.VisitPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPhotoPayload>
          }
          aggregate: {
            args: Prisma.VisitPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitPhoto>
          }
          groupBy: {
            args: Prisma.VisitPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<VisitPhotoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    school?: SchoolOmit
    schoolAssignment?: SchoolAssignmentOmit
    device?: DeviceOmit
    visit?: VisitOmit
    visitPhoto?: VisitPhotoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignedSchools: number
    visits: number
    devices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedSchools?: boolean | UserCountOutputTypeCountAssignedSchoolsArgs
    visits?: boolean | UserCountOutputTypeCountVisitsArgs
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    assignments: number
    devices: number
    visits: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | SchoolCountOutputTypeCountAssignmentsArgs
    devices?: boolean | SchoolCountOutputTypeCountDevicesArgs
    visits?: boolean | SchoolCountOutputTypeCountVisitsArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolAssignmentWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
  }


  /**
   * Count Type VisitCountOutputType
   */

  export type VisitCountOutputType = {
    visitPhotos: number
  }

  export type VisitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitPhotos?: boolean | VisitCountOutputTypeCountVisitPhotosArgs
  }

  // Custom InputTypes
  /**
   * VisitCountOutputType without action
   */
  export type VisitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitCountOutputType
     */
    select?: VisitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitCountOutputType without action
   */
  export type VisitCountOutputTypeCountVisitPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitPhotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    assignedSchools?: boolean | User$assignedSchoolsArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedSchools?: boolean | User$assignedSchoolsArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      assignedSchools: Prisma.$SchoolAssignmentPayload<ExtArgs>[]
      visits: Prisma.$VisitPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedSchools<T extends User$assignedSchoolsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedSchoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visits<T extends User$visitsArgs<ExtArgs> = {}>(args?: Subset<T, User$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.assignedSchools
   */
  export type User$assignedSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    where?: SchoolAssignmentWhereInput
    orderBy?: SchoolAssignmentOrderByWithRelationInput | SchoolAssignmentOrderByWithRelationInput[]
    cursor?: SchoolAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolAssignmentScalarFieldEnum | SchoolAssignmentScalarFieldEnum[]
  }

  /**
   * User.visits
   */
  export type User$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    cursor?: VisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    location: string | null
    county: string | null
    principal: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    location: string | null
    county: string | null
    principal: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    code: number
    location: number
    county: number
    principal: number
    phone: number
    createdAt: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    location?: true
    county?: true
    principal?: true
    phone?: true
    createdAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    location?: true
    county?: true
    principal?: true
    phone?: true
    createdAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    location?: true
    county?: true
    principal?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: number
    name: string
    code: string
    location: string
    county: string
    principal: string | null
    phone: string | null
    createdAt: Date
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    location?: boolean
    county?: boolean
    principal?: boolean
    phone?: boolean
    createdAt?: boolean
    assignments?: boolean | School$assignmentsArgs<ExtArgs>
    devices?: boolean | School$devicesArgs<ExtArgs>
    visits?: boolean | School$visitsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    location?: boolean
    county?: boolean
    principal?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    location?: boolean
    county?: boolean
    principal?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    location?: boolean
    county?: boolean
    principal?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "location" | "county" | "principal" | "phone" | "createdAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | School$assignmentsArgs<ExtArgs>
    devices?: boolean | School$devicesArgs<ExtArgs>
    visits?: boolean | School$visitsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      assignments: Prisma.$SchoolAssignmentPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
      visits: Prisma.$VisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      location: string
      county: string
      principal: string | null
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends School$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, School$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends School$devicesArgs<ExtArgs> = {}>(args?: Subset<T, School$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visits<T extends School$visitsArgs<ExtArgs> = {}>(args?: Subset<T, School$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'Int'>
    readonly name: FieldRef<"School", 'String'>
    readonly code: FieldRef<"School", 'String'>
    readonly location: FieldRef<"School", 'String'>
    readonly county: FieldRef<"School", 'String'>
    readonly principal: FieldRef<"School", 'String'>
    readonly phone: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.assignments
   */
  export type School$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    where?: SchoolAssignmentWhereInput
    orderBy?: SchoolAssignmentOrderByWithRelationInput | SchoolAssignmentOrderByWithRelationInput[]
    cursor?: SchoolAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolAssignmentScalarFieldEnum | SchoolAssignmentScalarFieldEnum[]
  }

  /**
   * School.devices
   */
  export type School$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * School.visits
   */
  export type School$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    cursor?: VisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model SchoolAssignment
   */

  export type AggregateSchoolAssignment = {
    _count: SchoolAssignmentCountAggregateOutputType | null
    _avg: SchoolAssignmentAvgAggregateOutputType | null
    _sum: SchoolAssignmentSumAggregateOutputType | null
    _min: SchoolAssignmentMinAggregateOutputType | null
    _max: SchoolAssignmentMaxAggregateOutputType | null
  }

  export type SchoolAssignmentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
  }

  export type SchoolAssignmentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
  }

  export type SchoolAssignmentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
  }

  export type SchoolAssignmentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
  }

  export type SchoolAssignmentCountAggregateOutputType = {
    id: number
    userId: number
    schoolId: number
    _all: number
  }


  export type SchoolAssignmentAvgAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type SchoolAssignmentSumAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type SchoolAssignmentMinAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type SchoolAssignmentMaxAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type SchoolAssignmentCountAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    _all?: true
  }

  export type SchoolAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolAssignment to aggregate.
     */
    where?: SchoolAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolAssignments to fetch.
     */
    orderBy?: SchoolAssignmentOrderByWithRelationInput | SchoolAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolAssignments
    **/
    _count?: true | SchoolAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolAssignmentMaxAggregateInputType
  }

  export type GetSchoolAssignmentAggregateType<T extends SchoolAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolAssignment[P]>
      : GetScalarType<T[P], AggregateSchoolAssignment[P]>
  }




  export type SchoolAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolAssignmentWhereInput
    orderBy?: SchoolAssignmentOrderByWithAggregationInput | SchoolAssignmentOrderByWithAggregationInput[]
    by: SchoolAssignmentScalarFieldEnum[] | SchoolAssignmentScalarFieldEnum
    having?: SchoolAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolAssignmentCountAggregateInputType | true
    _avg?: SchoolAssignmentAvgAggregateInputType
    _sum?: SchoolAssignmentSumAggregateInputType
    _min?: SchoolAssignmentMinAggregateInputType
    _max?: SchoolAssignmentMaxAggregateInputType
  }

  export type SchoolAssignmentGroupByOutputType = {
    id: number
    userId: number
    schoolId: number
    _count: SchoolAssignmentCountAggregateOutputType | null
    _avg: SchoolAssignmentAvgAggregateOutputType | null
    _sum: SchoolAssignmentSumAggregateOutputType | null
    _min: SchoolAssignmentMinAggregateOutputType | null
    _max: SchoolAssignmentMaxAggregateOutputType | null
  }

  type GetSchoolAssignmentGroupByPayload<T extends SchoolAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type SchoolAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolAssignment"]>

  export type SchoolAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolAssignment"]>

  export type SchoolAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolAssignment"]>

  export type SchoolAssignmentSelectScalar = {
    id?: boolean
    userId?: boolean
    schoolId?: boolean
  }

  export type SchoolAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "schoolId", ExtArgs["result"]["schoolAssignment"]>
  export type SchoolAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type SchoolAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type SchoolAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $SchoolAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolAssignment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      schoolId: number
    }, ExtArgs["result"]["schoolAssignment"]>
    composites: {}
  }

  type SchoolAssignmentGetPayload<S extends boolean | null | undefined | SchoolAssignmentDefaultArgs> = $Result.GetResult<Prisma.$SchoolAssignmentPayload, S>

  type SchoolAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolAssignmentCountAggregateInputType | true
    }

  export interface SchoolAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolAssignment'], meta: { name: 'SchoolAssignment' } }
    /**
     * Find zero or one SchoolAssignment that matches the filter.
     * @param {SchoolAssignmentFindUniqueArgs} args - Arguments to find a SchoolAssignment
     * @example
     * // Get one SchoolAssignment
     * const schoolAssignment = await prisma.schoolAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolAssignmentFindUniqueArgs>(args: SelectSubset<T, SchoolAssignmentFindUniqueArgs<ExtArgs>>): Prisma__SchoolAssignmentClient<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchoolAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolAssignmentFindUniqueOrThrowArgs} args - Arguments to find a SchoolAssignment
     * @example
     * // Get one SchoolAssignment
     * const schoolAssignment = await prisma.schoolAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolAssignmentClient<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAssignmentFindFirstArgs} args - Arguments to find a SchoolAssignment
     * @example
     * // Get one SchoolAssignment
     * const schoolAssignment = await prisma.schoolAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolAssignmentFindFirstArgs>(args?: SelectSubset<T, SchoolAssignmentFindFirstArgs<ExtArgs>>): Prisma__SchoolAssignmentClient<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAssignmentFindFirstOrThrowArgs} args - Arguments to find a SchoolAssignment
     * @example
     * // Get one SchoolAssignment
     * const schoolAssignment = await prisma.schoolAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolAssignmentClient<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchoolAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolAssignments
     * const schoolAssignments = await prisma.schoolAssignment.findMany()
     * 
     * // Get first 10 SchoolAssignments
     * const schoolAssignments = await prisma.schoolAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolAssignmentWithIdOnly = await prisma.schoolAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolAssignmentFindManyArgs>(args?: SelectSubset<T, SchoolAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchoolAssignment.
     * @param {SchoolAssignmentCreateArgs} args - Arguments to create a SchoolAssignment.
     * @example
     * // Create one SchoolAssignment
     * const SchoolAssignment = await prisma.schoolAssignment.create({
     *   data: {
     *     // ... data to create a SchoolAssignment
     *   }
     * })
     * 
     */
    create<T extends SchoolAssignmentCreateArgs>(args: SelectSubset<T, SchoolAssignmentCreateArgs<ExtArgs>>): Prisma__SchoolAssignmentClient<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchoolAssignments.
     * @param {SchoolAssignmentCreateManyArgs} args - Arguments to create many SchoolAssignments.
     * @example
     * // Create many SchoolAssignments
     * const schoolAssignment = await prisma.schoolAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolAssignmentCreateManyArgs>(args?: SelectSubset<T, SchoolAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolAssignments and returns the data saved in the database.
     * @param {SchoolAssignmentCreateManyAndReturnArgs} args - Arguments to create many SchoolAssignments.
     * @example
     * // Create many SchoolAssignments
     * const schoolAssignment = await prisma.schoolAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolAssignments and only return the `id`
     * const schoolAssignmentWithIdOnly = await prisma.schoolAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SchoolAssignment.
     * @param {SchoolAssignmentDeleteArgs} args - Arguments to delete one SchoolAssignment.
     * @example
     * // Delete one SchoolAssignment
     * const SchoolAssignment = await prisma.schoolAssignment.delete({
     *   where: {
     *     // ... filter to delete one SchoolAssignment
     *   }
     * })
     * 
     */
    delete<T extends SchoolAssignmentDeleteArgs>(args: SelectSubset<T, SchoolAssignmentDeleteArgs<ExtArgs>>): Prisma__SchoolAssignmentClient<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchoolAssignment.
     * @param {SchoolAssignmentUpdateArgs} args - Arguments to update one SchoolAssignment.
     * @example
     * // Update one SchoolAssignment
     * const schoolAssignment = await prisma.schoolAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolAssignmentUpdateArgs>(args: SelectSubset<T, SchoolAssignmentUpdateArgs<ExtArgs>>): Prisma__SchoolAssignmentClient<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchoolAssignments.
     * @param {SchoolAssignmentDeleteManyArgs} args - Arguments to filter SchoolAssignments to delete.
     * @example
     * // Delete a few SchoolAssignments
     * const { count } = await prisma.schoolAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolAssignmentDeleteManyArgs>(args?: SelectSubset<T, SchoolAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolAssignments
     * const schoolAssignment = await prisma.schoolAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolAssignmentUpdateManyArgs>(args: SelectSubset<T, SchoolAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolAssignments and returns the data updated in the database.
     * @param {SchoolAssignmentUpdateManyAndReturnArgs} args - Arguments to update many SchoolAssignments.
     * @example
     * // Update many SchoolAssignments
     * const schoolAssignment = await prisma.schoolAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SchoolAssignments and only return the `id`
     * const schoolAssignmentWithIdOnly = await prisma.schoolAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SchoolAssignment.
     * @param {SchoolAssignmentUpsertArgs} args - Arguments to update or create a SchoolAssignment.
     * @example
     * // Update or create a SchoolAssignment
     * const schoolAssignment = await prisma.schoolAssignment.upsert({
     *   create: {
     *     // ... data to create a SchoolAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolAssignment we want to update
     *   }
     * })
     */
    upsert<T extends SchoolAssignmentUpsertArgs>(args: SelectSubset<T, SchoolAssignmentUpsertArgs<ExtArgs>>): Prisma__SchoolAssignmentClient<$Result.GetResult<Prisma.$SchoolAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchoolAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAssignmentCountArgs} args - Arguments to filter SchoolAssignments to count.
     * @example
     * // Count the number of SchoolAssignments
     * const count = await prisma.schoolAssignment.count({
     *   where: {
     *     // ... the filter for the SchoolAssignments we want to count
     *   }
     * })
    **/
    count<T extends SchoolAssignmentCountArgs>(
      args?: Subset<T, SchoolAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAssignmentAggregateArgs>(args: Subset<T, SchoolAssignmentAggregateArgs>): Prisma.PrismaPromise<GetSchoolAssignmentAggregateType<T>>

    /**
     * Group by SchoolAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: SchoolAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolAssignment model
   */
  readonly fields: SchoolAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SchoolAssignment model
   */
  interface SchoolAssignmentFieldRefs {
    readonly id: FieldRef<"SchoolAssignment", 'Int'>
    readonly userId: FieldRef<"SchoolAssignment", 'Int'>
    readonly schoolId: FieldRef<"SchoolAssignment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SchoolAssignment findUnique
   */
  export type SchoolAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SchoolAssignment to fetch.
     */
    where: SchoolAssignmentWhereUniqueInput
  }

  /**
   * SchoolAssignment findUniqueOrThrow
   */
  export type SchoolAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SchoolAssignment to fetch.
     */
    where: SchoolAssignmentWhereUniqueInput
  }

  /**
   * SchoolAssignment findFirst
   */
  export type SchoolAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SchoolAssignment to fetch.
     */
    where?: SchoolAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolAssignments to fetch.
     */
    orderBy?: SchoolAssignmentOrderByWithRelationInput | SchoolAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolAssignments.
     */
    cursor?: SchoolAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolAssignments.
     */
    distinct?: SchoolAssignmentScalarFieldEnum | SchoolAssignmentScalarFieldEnum[]
  }

  /**
   * SchoolAssignment findFirstOrThrow
   */
  export type SchoolAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SchoolAssignment to fetch.
     */
    where?: SchoolAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolAssignments to fetch.
     */
    orderBy?: SchoolAssignmentOrderByWithRelationInput | SchoolAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolAssignments.
     */
    cursor?: SchoolAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolAssignments.
     */
    distinct?: SchoolAssignmentScalarFieldEnum | SchoolAssignmentScalarFieldEnum[]
  }

  /**
   * SchoolAssignment findMany
   */
  export type SchoolAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which SchoolAssignments to fetch.
     */
    where?: SchoolAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolAssignments to fetch.
     */
    orderBy?: SchoolAssignmentOrderByWithRelationInput | SchoolAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolAssignments.
     */
    cursor?: SchoolAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolAssignments.
     */
    skip?: number
    distinct?: SchoolAssignmentScalarFieldEnum | SchoolAssignmentScalarFieldEnum[]
  }

  /**
   * SchoolAssignment create
   */
  export type SchoolAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a SchoolAssignment.
     */
    data: XOR<SchoolAssignmentCreateInput, SchoolAssignmentUncheckedCreateInput>
  }

  /**
   * SchoolAssignment createMany
   */
  export type SchoolAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolAssignments.
     */
    data: SchoolAssignmentCreateManyInput | SchoolAssignmentCreateManyInput[]
  }

  /**
   * SchoolAssignment createManyAndReturn
   */
  export type SchoolAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many SchoolAssignments.
     */
    data: SchoolAssignmentCreateManyInput | SchoolAssignmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolAssignment update
   */
  export type SchoolAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a SchoolAssignment.
     */
    data: XOR<SchoolAssignmentUpdateInput, SchoolAssignmentUncheckedUpdateInput>
    /**
     * Choose, which SchoolAssignment to update.
     */
    where: SchoolAssignmentWhereUniqueInput
  }

  /**
   * SchoolAssignment updateMany
   */
  export type SchoolAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolAssignments.
     */
    data: XOR<SchoolAssignmentUpdateManyMutationInput, SchoolAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which SchoolAssignments to update
     */
    where?: SchoolAssignmentWhereInput
    /**
     * Limit how many SchoolAssignments to update.
     */
    limit?: number
  }

  /**
   * SchoolAssignment updateManyAndReturn
   */
  export type SchoolAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update SchoolAssignments.
     */
    data: XOR<SchoolAssignmentUpdateManyMutationInput, SchoolAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which SchoolAssignments to update
     */
    where?: SchoolAssignmentWhereInput
    /**
     * Limit how many SchoolAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolAssignment upsert
   */
  export type SchoolAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the SchoolAssignment to update in case it exists.
     */
    where: SchoolAssignmentWhereUniqueInput
    /**
     * In case the SchoolAssignment found by the `where` argument doesn't exist, create a new SchoolAssignment with this data.
     */
    create: XOR<SchoolAssignmentCreateInput, SchoolAssignmentUncheckedCreateInput>
    /**
     * In case the SchoolAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolAssignmentUpdateInput, SchoolAssignmentUncheckedUpdateInput>
  }

  /**
   * SchoolAssignment delete
   */
  export type SchoolAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
    /**
     * Filter which SchoolAssignment to delete.
     */
    where: SchoolAssignmentWhereUniqueInput
  }

  /**
   * SchoolAssignment deleteMany
   */
  export type SchoolAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolAssignments to delete
     */
    where?: SchoolAssignmentWhereInput
    /**
     * Limit how many SchoolAssignments to delete.
     */
    limit?: number
  }

  /**
   * SchoolAssignment without action
   */
  export type SchoolAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolAssignment
     */
    select?: SchoolAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolAssignment
     */
    omit?: SchoolAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
    addedById: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
    addedById: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    schoolId: number | null
    addedById: number | null
    deviceType: string | null
    serialNumber: string | null
    status: string | null
    notes: string | null
    photo: string | null
    createdAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    schoolId: number | null
    addedById: number | null
    deviceType: string | null
    serialNumber: string | null
    status: string | null
    notes: string | null
    photo: string | null
    createdAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    schoolId: number
    addedById: number
    deviceType: number
    serialNumber: number
    status: number
    notes: number
    photo: number
    createdAt: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    schoolId?: true
    addedById?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    schoolId?: true
    addedById?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    schoolId?: true
    addedById?: true
    deviceType?: true
    serialNumber?: true
    status?: true
    notes?: true
    photo?: true
    createdAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    schoolId?: true
    addedById?: true
    deviceType?: true
    serialNumber?: true
    status?: true
    notes?: true
    photo?: true
    createdAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    schoolId?: true
    addedById?: true
    deviceType?: true
    serialNumber?: true
    status?: true
    notes?: true
    photo?: true
    createdAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    schoolId: number
    addedById: number
    deviceType: string
    serialNumber: string
    status: string
    notes: string | null
    photo: string | null
    createdAt: Date
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    addedById?: boolean
    deviceType?: boolean
    serialNumber?: boolean
    status?: boolean
    notes?: boolean
    photo?: boolean
    createdAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    addedById?: boolean
    deviceType?: boolean
    serialNumber?: boolean
    status?: boolean
    notes?: boolean
    photo?: boolean
    createdAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    addedById?: boolean
    deviceType?: boolean
    serialNumber?: boolean
    status?: boolean
    notes?: boolean
    photo?: boolean
    createdAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    schoolId?: boolean
    addedById?: boolean
    deviceType?: boolean
    serialNumber?: boolean
    status?: boolean
    notes?: boolean
    photo?: boolean
    createdAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "addedById" | "deviceType" | "serialNumber" | "status" | "notes" | "photo" | "createdAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      addedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolId: number
      addedById: number
      deviceType: string
      serialNumber: string
      status: string
      notes: string | null
      photo: string | null
      createdAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly schoolId: FieldRef<"Device", 'Int'>
    readonly addedById: FieldRef<"Device", 'Int'>
    readonly deviceType: FieldRef<"Device", 'String'>
    readonly serialNumber: FieldRef<"Device", 'String'>
    readonly status: FieldRef<"Device", 'String'>
    readonly notes: FieldRef<"Device", 'String'>
    readonly photo: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Visit
   */

  export type AggregateVisit = {
    _count: VisitCountAggregateOutputType | null
    _avg: VisitAvgAggregateOutputType | null
    _sum: VisitSumAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  export type VisitAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
    gpsLatitude: number | null
    gpsLongitude: number | null
  }

  export type VisitSumAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
    gpsLatitude: number | null
    gpsLongitude: number | null
  }

  export type VisitMinAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
    visitDate: Date | null
    gpsLatitude: number | null
    gpsLongitude: number | null
    notes: string | null
    photo: string | null
    createdAt: Date | null
  }

  export type VisitMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    schoolId: number | null
    visitDate: Date | null
    gpsLatitude: number | null
    gpsLongitude: number | null
    notes: string | null
    photo: string | null
    createdAt: Date | null
  }

  export type VisitCountAggregateOutputType = {
    id: number
    userId: number
    schoolId: number
    visitDate: number
    gpsLatitude: number
    gpsLongitude: number
    notes: number
    photo: number
    createdAt: number
    _all: number
  }


  export type VisitAvgAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    gpsLatitude?: true
    gpsLongitude?: true
  }

  export type VisitSumAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    gpsLatitude?: true
    gpsLongitude?: true
  }

  export type VisitMinAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    visitDate?: true
    gpsLatitude?: true
    gpsLongitude?: true
    notes?: true
    photo?: true
    createdAt?: true
  }

  export type VisitMaxAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    visitDate?: true
    gpsLatitude?: true
    gpsLongitude?: true
    notes?: true
    photo?: true
    createdAt?: true
  }

  export type VisitCountAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    visitDate?: true
    gpsLatitude?: true
    gpsLongitude?: true
    notes?: true
    photo?: true
    createdAt?: true
    _all?: true
  }

  export type VisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visit to aggregate.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visits
    **/
    _count?: true | VisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitMaxAggregateInputType
  }

  export type GetVisitAggregateType<T extends VisitAggregateArgs> = {
        [P in keyof T & keyof AggregateVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisit[P]>
      : GetScalarType<T[P], AggregateVisit[P]>
  }




  export type VisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithAggregationInput | VisitOrderByWithAggregationInput[]
    by: VisitScalarFieldEnum[] | VisitScalarFieldEnum
    having?: VisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitCountAggregateInputType | true
    _avg?: VisitAvgAggregateInputType
    _sum?: VisitSumAggregateInputType
    _min?: VisitMinAggregateInputType
    _max?: VisitMaxAggregateInputType
  }

  export type VisitGroupByOutputType = {
    id: number
    userId: number
    schoolId: number
    visitDate: Date
    gpsLatitude: number | null
    gpsLongitude: number | null
    notes: string | null
    photo: string | null
    createdAt: Date
    _count: VisitCountAggregateOutputType | null
    _avg: VisitAvgAggregateOutputType | null
    _sum: VisitSumAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  type GetVisitGroupByPayload<T extends VisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitGroupByOutputType[P]>
            : GetScalarType<T[P], VisitGroupByOutputType[P]>
        }
      >
    >


  export type VisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    visitDate?: boolean
    gpsLatitude?: boolean
    gpsLongitude?: boolean
    notes?: boolean
    photo?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    visitPhotos?: boolean | Visit$visitPhotosArgs<ExtArgs>
    _count?: boolean | VisitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    visitDate?: boolean
    gpsLatitude?: boolean
    gpsLongitude?: boolean
    notes?: boolean
    photo?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    visitDate?: boolean
    gpsLatitude?: boolean
    gpsLongitude?: boolean
    notes?: boolean
    photo?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectScalar = {
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    visitDate?: boolean
    gpsLatitude?: boolean
    gpsLongitude?: boolean
    notes?: boolean
    photo?: boolean
    createdAt?: boolean
  }

  export type VisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "schoolId" | "visitDate" | "gpsLatitude" | "gpsLongitude" | "notes" | "photo" | "createdAt", ExtArgs["result"]["visit"]>
  export type VisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    visitPhotos?: boolean | Visit$visitPhotosArgs<ExtArgs>
    _count?: boolean | VisitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type VisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $VisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
      visitPhotos: Prisma.$VisitPhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      schoolId: number
      visitDate: Date
      gpsLatitude: number | null
      gpsLongitude: number | null
      notes: string | null
      photo: string | null
      createdAt: Date
    }, ExtArgs["result"]["visit"]>
    composites: {}
  }

  type VisitGetPayload<S extends boolean | null | undefined | VisitDefaultArgs> = $Result.GetResult<Prisma.$VisitPayload, S>

  type VisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitCountAggregateInputType | true
    }

  export interface VisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visit'], meta: { name: 'Visit' } }
    /**
     * Find zero or one Visit that matches the filter.
     * @param {VisitFindUniqueArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitFindUniqueArgs>(args: SelectSubset<T, VisitFindUniqueArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitFindUniqueOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitFindFirstArgs>(args?: SelectSubset<T, VisitFindFirstArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visits
     * const visits = await prisma.visit.findMany()
     * 
     * // Get first 10 Visits
     * const visits = await prisma.visit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitWithIdOnly = await prisma.visit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitFindManyArgs>(args?: SelectSubset<T, VisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visit.
     * @param {VisitCreateArgs} args - Arguments to create a Visit.
     * @example
     * // Create one Visit
     * const Visit = await prisma.visit.create({
     *   data: {
     *     // ... data to create a Visit
     *   }
     * })
     * 
     */
    create<T extends VisitCreateArgs>(args: SelectSubset<T, VisitCreateArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visits.
     * @param {VisitCreateManyArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visit = await prisma.visit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitCreateManyArgs>(args?: SelectSubset<T, VisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visits and returns the data saved in the database.
     * @param {VisitCreateManyAndReturnArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visit = await prisma.visit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visits and only return the `id`
     * const visitWithIdOnly = await prisma.visit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visit.
     * @param {VisitDeleteArgs} args - Arguments to delete one Visit.
     * @example
     * // Delete one Visit
     * const Visit = await prisma.visit.delete({
     *   where: {
     *     // ... filter to delete one Visit
     *   }
     * })
     * 
     */
    delete<T extends VisitDeleteArgs>(args: SelectSubset<T, VisitDeleteArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visit.
     * @param {VisitUpdateArgs} args - Arguments to update one Visit.
     * @example
     * // Update one Visit
     * const visit = await prisma.visit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitUpdateArgs>(args: SelectSubset<T, VisitUpdateArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visits.
     * @param {VisitDeleteManyArgs} args - Arguments to filter Visits to delete.
     * @example
     * // Delete a few Visits
     * const { count } = await prisma.visit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitDeleteManyArgs>(args?: SelectSubset<T, VisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitUpdateManyArgs>(args: SelectSubset<T, VisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits and returns the data updated in the database.
     * @param {VisitUpdateManyAndReturnArgs} args - Arguments to update many Visits.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visits and only return the `id`
     * const visitWithIdOnly = await prisma.visit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visit.
     * @param {VisitUpsertArgs} args - Arguments to update or create a Visit.
     * @example
     * // Update or create a Visit
     * const visit = await prisma.visit.upsert({
     *   create: {
     *     // ... data to create a Visit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visit we want to update
     *   }
     * })
     */
    upsert<T extends VisitUpsertArgs>(args: SelectSubset<T, VisitUpsertArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitCountArgs} args - Arguments to filter Visits to count.
     * @example
     * // Count the number of Visits
     * const count = await prisma.visit.count({
     *   where: {
     *     // ... the filter for the Visits we want to count
     *   }
     * })
    **/
    count<T extends VisitCountArgs>(
      args?: Subset<T, VisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitAggregateArgs>(args: Subset<T, VisitAggregateArgs>): Prisma.PrismaPromise<GetVisitAggregateType<T>>

    /**
     * Group by Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitGroupByArgs['orderBy'] }
        : { orderBy?: VisitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visit model
   */
  readonly fields: VisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visitPhotos<T extends Visit$visitPhotosArgs<ExtArgs> = {}>(args?: Subset<T, Visit$visitPhotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visit model
   */
  interface VisitFieldRefs {
    readonly id: FieldRef<"Visit", 'Int'>
    readonly userId: FieldRef<"Visit", 'Int'>
    readonly schoolId: FieldRef<"Visit", 'Int'>
    readonly visitDate: FieldRef<"Visit", 'DateTime'>
    readonly gpsLatitude: FieldRef<"Visit", 'Float'>
    readonly gpsLongitude: FieldRef<"Visit", 'Float'>
    readonly notes: FieldRef<"Visit", 'String'>
    readonly photo: FieldRef<"Visit", 'String'>
    readonly createdAt: FieldRef<"Visit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visit findUnique
   */
  export type VisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit findUniqueOrThrow
   */
  export type VisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit findFirst
   */
  export type VisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit findFirstOrThrow
   */
  export type VisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit findMany
   */
  export type VisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visits to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit create
   */
  export type VisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to create a Visit.
     */
    data: XOR<VisitCreateInput, VisitUncheckedCreateInput>
  }

  /**
   * Visit createMany
   */
  export type VisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[]
  }

  /**
   * Visit createManyAndReturn
   */
  export type VisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visit update
   */
  export type VisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to update a Visit.
     */
    data: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
    /**
     * Choose, which Visit to update.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit updateMany
   */
  export type VisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to update.
     */
    limit?: number
  }

  /**
   * Visit updateManyAndReturn
   */
  export type VisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visit upsert
   */
  export type VisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The filter to search for the Visit to update in case it exists.
     */
    where: VisitWhereUniqueInput
    /**
     * In case the Visit found by the `where` argument doesn't exist, create a new Visit with this data.
     */
    create: XOR<VisitCreateInput, VisitUncheckedCreateInput>
    /**
     * In case the Visit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
  }

  /**
   * Visit delete
   */
  export type VisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter which Visit to delete.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit deleteMany
   */
  export type VisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visits to delete
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to delete.
     */
    limit?: number
  }

  /**
   * Visit.visitPhotos
   */
  export type Visit$visitPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    where?: VisitPhotoWhereInput
    orderBy?: VisitPhotoOrderByWithRelationInput | VisitPhotoOrderByWithRelationInput[]
    cursor?: VisitPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitPhotoScalarFieldEnum | VisitPhotoScalarFieldEnum[]
  }

  /**
   * Visit without action
   */
  export type VisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
  }


  /**
   * Model VisitPhoto
   */

  export type AggregateVisitPhoto = {
    _count: VisitPhotoCountAggregateOutputType | null
    _avg: VisitPhotoAvgAggregateOutputType | null
    _sum: VisitPhotoSumAggregateOutputType | null
    _min: VisitPhotoMinAggregateOutputType | null
    _max: VisitPhotoMaxAggregateOutputType | null
  }

  export type VisitPhotoAvgAggregateOutputType = {
    id: number | null
    visitId: number | null
  }

  export type VisitPhotoSumAggregateOutputType = {
    id: number | null
    visitId: number | null
  }

  export type VisitPhotoMinAggregateOutputType = {
    id: number | null
    visitId: number | null
    photoUrl: string | null
    createdAt: Date | null
  }

  export type VisitPhotoMaxAggregateOutputType = {
    id: number | null
    visitId: number | null
    photoUrl: string | null
    createdAt: Date | null
  }

  export type VisitPhotoCountAggregateOutputType = {
    id: number
    visitId: number
    photoUrl: number
    createdAt: number
    _all: number
  }


  export type VisitPhotoAvgAggregateInputType = {
    id?: true
    visitId?: true
  }

  export type VisitPhotoSumAggregateInputType = {
    id?: true
    visitId?: true
  }

  export type VisitPhotoMinAggregateInputType = {
    id?: true
    visitId?: true
    photoUrl?: true
    createdAt?: true
  }

  export type VisitPhotoMaxAggregateInputType = {
    id?: true
    visitId?: true
    photoUrl?: true
    createdAt?: true
  }

  export type VisitPhotoCountAggregateInputType = {
    id?: true
    visitId?: true
    photoUrl?: true
    createdAt?: true
    _all?: true
  }

  export type VisitPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitPhoto to aggregate.
     */
    where?: VisitPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitPhotos to fetch.
     */
    orderBy?: VisitPhotoOrderByWithRelationInput | VisitPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitPhotos
    **/
    _count?: true | VisitPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitPhotoMaxAggregateInputType
  }

  export type GetVisitPhotoAggregateType<T extends VisitPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitPhoto[P]>
      : GetScalarType<T[P], AggregateVisitPhoto[P]>
  }




  export type VisitPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitPhotoWhereInput
    orderBy?: VisitPhotoOrderByWithAggregationInput | VisitPhotoOrderByWithAggregationInput[]
    by: VisitPhotoScalarFieldEnum[] | VisitPhotoScalarFieldEnum
    having?: VisitPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitPhotoCountAggregateInputType | true
    _avg?: VisitPhotoAvgAggregateInputType
    _sum?: VisitPhotoSumAggregateInputType
    _min?: VisitPhotoMinAggregateInputType
    _max?: VisitPhotoMaxAggregateInputType
  }

  export type VisitPhotoGroupByOutputType = {
    id: number
    visitId: number
    photoUrl: string
    createdAt: Date
    _count: VisitPhotoCountAggregateOutputType | null
    _avg: VisitPhotoAvgAggregateOutputType | null
    _sum: VisitPhotoSumAggregateOutputType | null
    _min: VisitPhotoMinAggregateOutputType | null
    _max: VisitPhotoMaxAggregateOutputType | null
  }

  type GetVisitPhotoGroupByPayload<T extends VisitPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], VisitPhotoGroupByOutputType[P]>
        }
      >
    >


  export type VisitPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitPhoto"]>

  export type VisitPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitPhoto"]>

  export type VisitPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitPhoto"]>

  export type VisitPhotoSelectScalar = {
    id?: boolean
    visitId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
  }

  export type VisitPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitId" | "photoUrl" | "createdAt", ExtArgs["result"]["visitPhoto"]>
  export type VisitPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }
  export type VisitPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }
  export type VisitPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }

  export type $VisitPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitPhoto"
    objects: {
      visit: Prisma.$VisitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      visitId: number
      photoUrl: string
      createdAt: Date
    }, ExtArgs["result"]["visitPhoto"]>
    composites: {}
  }

  type VisitPhotoGetPayload<S extends boolean | null | undefined | VisitPhotoDefaultArgs> = $Result.GetResult<Prisma.$VisitPhotoPayload, S>

  type VisitPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitPhotoCountAggregateInputType | true
    }

  export interface VisitPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitPhoto'], meta: { name: 'VisitPhoto' } }
    /**
     * Find zero or one VisitPhoto that matches the filter.
     * @param {VisitPhotoFindUniqueArgs} args - Arguments to find a VisitPhoto
     * @example
     * // Get one VisitPhoto
     * const visitPhoto = await prisma.visitPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitPhotoFindUniqueArgs>(args: SelectSubset<T, VisitPhotoFindUniqueArgs<ExtArgs>>): Prisma__VisitPhotoClient<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitPhotoFindUniqueOrThrowArgs} args - Arguments to find a VisitPhoto
     * @example
     * // Get one VisitPhoto
     * const visitPhoto = await prisma.visitPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitPhotoClient<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitPhotoFindFirstArgs} args - Arguments to find a VisitPhoto
     * @example
     * // Get one VisitPhoto
     * const visitPhoto = await prisma.visitPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitPhotoFindFirstArgs>(args?: SelectSubset<T, VisitPhotoFindFirstArgs<ExtArgs>>): Prisma__VisitPhotoClient<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitPhotoFindFirstOrThrowArgs} args - Arguments to find a VisitPhoto
     * @example
     * // Get one VisitPhoto
     * const visitPhoto = await prisma.visitPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitPhotoClient<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitPhotos
     * const visitPhotos = await prisma.visitPhoto.findMany()
     * 
     * // Get first 10 VisitPhotos
     * const visitPhotos = await prisma.visitPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitPhotoWithIdOnly = await prisma.visitPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitPhotoFindManyArgs>(args?: SelectSubset<T, VisitPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitPhoto.
     * @param {VisitPhotoCreateArgs} args - Arguments to create a VisitPhoto.
     * @example
     * // Create one VisitPhoto
     * const VisitPhoto = await prisma.visitPhoto.create({
     *   data: {
     *     // ... data to create a VisitPhoto
     *   }
     * })
     * 
     */
    create<T extends VisitPhotoCreateArgs>(args: SelectSubset<T, VisitPhotoCreateArgs<ExtArgs>>): Prisma__VisitPhotoClient<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitPhotos.
     * @param {VisitPhotoCreateManyArgs} args - Arguments to create many VisitPhotos.
     * @example
     * // Create many VisitPhotos
     * const visitPhoto = await prisma.visitPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitPhotoCreateManyArgs>(args?: SelectSubset<T, VisitPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisitPhotos and returns the data saved in the database.
     * @param {VisitPhotoCreateManyAndReturnArgs} args - Arguments to create many VisitPhotos.
     * @example
     * // Create many VisitPhotos
     * const visitPhoto = await prisma.visitPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisitPhotos and only return the `id`
     * const visitPhotoWithIdOnly = await prisma.visitPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisitPhoto.
     * @param {VisitPhotoDeleteArgs} args - Arguments to delete one VisitPhoto.
     * @example
     * // Delete one VisitPhoto
     * const VisitPhoto = await prisma.visitPhoto.delete({
     *   where: {
     *     // ... filter to delete one VisitPhoto
     *   }
     * })
     * 
     */
    delete<T extends VisitPhotoDeleteArgs>(args: SelectSubset<T, VisitPhotoDeleteArgs<ExtArgs>>): Prisma__VisitPhotoClient<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitPhoto.
     * @param {VisitPhotoUpdateArgs} args - Arguments to update one VisitPhoto.
     * @example
     * // Update one VisitPhoto
     * const visitPhoto = await prisma.visitPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitPhotoUpdateArgs>(args: SelectSubset<T, VisitPhotoUpdateArgs<ExtArgs>>): Prisma__VisitPhotoClient<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitPhotos.
     * @param {VisitPhotoDeleteManyArgs} args - Arguments to filter VisitPhotos to delete.
     * @example
     * // Delete a few VisitPhotos
     * const { count } = await prisma.visitPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitPhotoDeleteManyArgs>(args?: SelectSubset<T, VisitPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitPhotos
     * const visitPhoto = await prisma.visitPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitPhotoUpdateManyArgs>(args: SelectSubset<T, VisitPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitPhotos and returns the data updated in the database.
     * @param {VisitPhotoUpdateManyAndReturnArgs} args - Arguments to update many VisitPhotos.
     * @example
     * // Update many VisitPhotos
     * const visitPhoto = await prisma.visitPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisitPhotos and only return the `id`
     * const visitPhotoWithIdOnly = await prisma.visitPhoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisitPhoto.
     * @param {VisitPhotoUpsertArgs} args - Arguments to update or create a VisitPhoto.
     * @example
     * // Update or create a VisitPhoto
     * const visitPhoto = await prisma.visitPhoto.upsert({
     *   create: {
     *     // ... data to create a VisitPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitPhoto we want to update
     *   }
     * })
     */
    upsert<T extends VisitPhotoUpsertArgs>(args: SelectSubset<T, VisitPhotoUpsertArgs<ExtArgs>>): Prisma__VisitPhotoClient<$Result.GetResult<Prisma.$VisitPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitPhotoCountArgs} args - Arguments to filter VisitPhotos to count.
     * @example
     * // Count the number of VisitPhotos
     * const count = await prisma.visitPhoto.count({
     *   where: {
     *     // ... the filter for the VisitPhotos we want to count
     *   }
     * })
    **/
    count<T extends VisitPhotoCountArgs>(
      args?: Subset<T, VisitPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitPhotoAggregateArgs>(args: Subset<T, VisitPhotoAggregateArgs>): Prisma.PrismaPromise<GetVisitPhotoAggregateType<T>>

    /**
     * Group by VisitPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitPhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitPhotoGroupByArgs['orderBy'] }
        : { orderBy?: VisitPhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitPhoto model
   */
  readonly fields: VisitPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visit<T extends VisitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitDefaultArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VisitPhoto model
   */
  interface VisitPhotoFieldRefs {
    readonly id: FieldRef<"VisitPhoto", 'Int'>
    readonly visitId: FieldRef<"VisitPhoto", 'Int'>
    readonly photoUrl: FieldRef<"VisitPhoto", 'String'>
    readonly createdAt: FieldRef<"VisitPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VisitPhoto findUnique
   */
  export type VisitPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which VisitPhoto to fetch.
     */
    where: VisitPhotoWhereUniqueInput
  }

  /**
   * VisitPhoto findUniqueOrThrow
   */
  export type VisitPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which VisitPhoto to fetch.
     */
    where: VisitPhotoWhereUniqueInput
  }

  /**
   * VisitPhoto findFirst
   */
  export type VisitPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which VisitPhoto to fetch.
     */
    where?: VisitPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitPhotos to fetch.
     */
    orderBy?: VisitPhotoOrderByWithRelationInput | VisitPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitPhotos.
     */
    cursor?: VisitPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitPhotos.
     */
    distinct?: VisitPhotoScalarFieldEnum | VisitPhotoScalarFieldEnum[]
  }

  /**
   * VisitPhoto findFirstOrThrow
   */
  export type VisitPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which VisitPhoto to fetch.
     */
    where?: VisitPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitPhotos to fetch.
     */
    orderBy?: VisitPhotoOrderByWithRelationInput | VisitPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitPhotos.
     */
    cursor?: VisitPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitPhotos.
     */
    distinct?: VisitPhotoScalarFieldEnum | VisitPhotoScalarFieldEnum[]
  }

  /**
   * VisitPhoto findMany
   */
  export type VisitPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which VisitPhotos to fetch.
     */
    where?: VisitPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitPhotos to fetch.
     */
    orderBy?: VisitPhotoOrderByWithRelationInput | VisitPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitPhotos.
     */
    cursor?: VisitPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitPhotos.
     */
    skip?: number
    distinct?: VisitPhotoScalarFieldEnum | VisitPhotoScalarFieldEnum[]
  }

  /**
   * VisitPhoto create
   */
  export type VisitPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a VisitPhoto.
     */
    data: XOR<VisitPhotoCreateInput, VisitPhotoUncheckedCreateInput>
  }

  /**
   * VisitPhoto createMany
   */
  export type VisitPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitPhotos.
     */
    data: VisitPhotoCreateManyInput | VisitPhotoCreateManyInput[]
  }

  /**
   * VisitPhoto createManyAndReturn
   */
  export type VisitPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many VisitPhotos.
     */
    data: VisitPhotoCreateManyInput | VisitPhotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitPhoto update
   */
  export type VisitPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a VisitPhoto.
     */
    data: XOR<VisitPhotoUpdateInput, VisitPhotoUncheckedUpdateInput>
    /**
     * Choose, which VisitPhoto to update.
     */
    where: VisitPhotoWhereUniqueInput
  }

  /**
   * VisitPhoto updateMany
   */
  export type VisitPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitPhotos.
     */
    data: XOR<VisitPhotoUpdateManyMutationInput, VisitPhotoUncheckedUpdateManyInput>
    /**
     * Filter which VisitPhotos to update
     */
    where?: VisitPhotoWhereInput
    /**
     * Limit how many VisitPhotos to update.
     */
    limit?: number
  }

  /**
   * VisitPhoto updateManyAndReturn
   */
  export type VisitPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * The data used to update VisitPhotos.
     */
    data: XOR<VisitPhotoUpdateManyMutationInput, VisitPhotoUncheckedUpdateManyInput>
    /**
     * Filter which VisitPhotos to update
     */
    where?: VisitPhotoWhereInput
    /**
     * Limit how many VisitPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitPhoto upsert
   */
  export type VisitPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the VisitPhoto to update in case it exists.
     */
    where: VisitPhotoWhereUniqueInput
    /**
     * In case the VisitPhoto found by the `where` argument doesn't exist, create a new VisitPhoto with this data.
     */
    create: XOR<VisitPhotoCreateInput, VisitPhotoUncheckedCreateInput>
    /**
     * In case the VisitPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitPhotoUpdateInput, VisitPhotoUncheckedUpdateInput>
  }

  /**
   * VisitPhoto delete
   */
  export type VisitPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
    /**
     * Filter which VisitPhoto to delete.
     */
    where: VisitPhotoWhereUniqueInput
  }

  /**
   * VisitPhoto deleteMany
   */
  export type VisitPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitPhotos to delete
     */
    where?: VisitPhotoWhereInput
    /**
     * Limit how many VisitPhotos to delete.
     */
    limit?: number
  }

  /**
   * VisitPhoto without action
   */
  export type VisitPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitPhoto
     */
    select?: VisitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitPhoto
     */
    omit?: VisitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitPhotoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    location: 'location',
    county: 'county',
    principal: 'principal',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const SchoolAssignmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    schoolId: 'schoolId'
  };

  export type SchoolAssignmentScalarFieldEnum = (typeof SchoolAssignmentScalarFieldEnum)[keyof typeof SchoolAssignmentScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    addedById: 'addedById',
    deviceType: 'deviceType',
    serialNumber: 'serialNumber',
    status: 'status',
    notes: 'notes',
    photo: 'photo',
    createdAt: 'createdAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const VisitScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    schoolId: 'schoolId',
    visitDate: 'visitDate',
    gpsLatitude: 'gpsLatitude',
    gpsLongitude: 'gpsLongitude',
    notes: 'notes',
    photo: 'photo',
    createdAt: 'createdAt'
  };

  export type VisitScalarFieldEnum = (typeof VisitScalarFieldEnum)[keyof typeof VisitScalarFieldEnum]


  export const VisitPhotoScalarFieldEnum: {
    id: 'id',
    visitId: 'visitId',
    photoUrl: 'photoUrl',
    createdAt: 'createdAt'
  };

  export type VisitPhotoScalarFieldEnum = (typeof VisitPhotoScalarFieldEnum)[keyof typeof VisitPhotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    assignedSchools?: SchoolAssignmentListRelationFilter
    visits?: VisitListRelationFilter
    devices?: DeviceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    assignedSchools?: SchoolAssignmentOrderByRelationAggregateInput
    visits?: VisitOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    assignedSchools?: SchoolAssignmentListRelationFilter
    visits?: VisitListRelationFilter
    devices?: DeviceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: IntFilter<"School"> | number
    name?: StringFilter<"School"> | string
    code?: StringFilter<"School"> | string
    location?: StringFilter<"School"> | string
    county?: StringFilter<"School"> | string
    principal?: StringNullableFilter<"School"> | string | null
    phone?: StringNullableFilter<"School"> | string | null
    createdAt?: DateTimeFilter<"School"> | Date | string
    assignments?: SchoolAssignmentListRelationFilter
    devices?: DeviceListRelationFilter
    visits?: VisitListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrder
    county?: SortOrder
    principal?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    assignments?: SchoolAssignmentOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    visits?: VisitOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    location?: StringFilter<"School"> | string
    county?: StringFilter<"School"> | string
    principal?: StringNullableFilter<"School"> | string | null
    phone?: StringNullableFilter<"School"> | string | null
    createdAt?: DateTimeFilter<"School"> | Date | string
    assignments?: SchoolAssignmentListRelationFilter
    devices?: DeviceListRelationFilter
    visits?: VisitListRelationFilter
  }, "id" | "code">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrder
    county?: SortOrder
    principal?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"School"> | number
    name?: StringWithAggregatesFilter<"School"> | string
    code?: StringWithAggregatesFilter<"School"> | string
    location?: StringWithAggregatesFilter<"School"> | string
    county?: StringWithAggregatesFilter<"School"> | string
    principal?: StringNullableWithAggregatesFilter<"School"> | string | null
    phone?: StringNullableWithAggregatesFilter<"School"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type SchoolAssignmentWhereInput = {
    AND?: SchoolAssignmentWhereInput | SchoolAssignmentWhereInput[]
    OR?: SchoolAssignmentWhereInput[]
    NOT?: SchoolAssignmentWhereInput | SchoolAssignmentWhereInput[]
    id?: IntFilter<"SchoolAssignment"> | number
    userId?: IntFilter<"SchoolAssignment"> | number
    schoolId?: IntFilter<"SchoolAssignment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type SchoolAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    user?: UserOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type SchoolAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_schoolId?: SchoolAssignmentUserIdSchoolIdCompoundUniqueInput
    AND?: SchoolAssignmentWhereInput | SchoolAssignmentWhereInput[]
    OR?: SchoolAssignmentWhereInput[]
    NOT?: SchoolAssignmentWhereInput | SchoolAssignmentWhereInput[]
    userId?: IntFilter<"SchoolAssignment"> | number
    schoolId?: IntFilter<"SchoolAssignment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "userId_schoolId">

  export type SchoolAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    _count?: SchoolAssignmentCountOrderByAggregateInput
    _avg?: SchoolAssignmentAvgOrderByAggregateInput
    _max?: SchoolAssignmentMaxOrderByAggregateInput
    _min?: SchoolAssignmentMinOrderByAggregateInput
    _sum?: SchoolAssignmentSumOrderByAggregateInput
  }

  export type SchoolAssignmentScalarWhereWithAggregatesInput = {
    AND?: SchoolAssignmentScalarWhereWithAggregatesInput | SchoolAssignmentScalarWhereWithAggregatesInput[]
    OR?: SchoolAssignmentScalarWhereWithAggregatesInput[]
    NOT?: SchoolAssignmentScalarWhereWithAggregatesInput | SchoolAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SchoolAssignment"> | number
    userId?: IntWithAggregatesFilter<"SchoolAssignment"> | number
    schoolId?: IntWithAggregatesFilter<"SchoolAssignment"> | number
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    schoolId?: IntFilter<"Device"> | number
    addedById?: IntFilter<"Device"> | number
    deviceType?: StringFilter<"Device"> | string
    serialNumber?: StringFilter<"Device"> | string
    status?: StringFilter<"Device"> | string
    notes?: StringNullableFilter<"Device"> | string | null
    photo?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    addedById?: SortOrder
    deviceType?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    addedBy?: UserOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serialNumber?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    schoolId?: IntFilter<"Device"> | number
    addedById?: IntFilter<"Device"> | number
    deviceType?: StringFilter<"Device"> | string
    status?: StringFilter<"Device"> | string
    notes?: StringNullableFilter<"Device"> | string | null
    photo?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "serialNumber">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    addedById?: SortOrder
    deviceType?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    schoolId?: IntWithAggregatesFilter<"Device"> | number
    addedById?: IntWithAggregatesFilter<"Device"> | number
    deviceType?: StringWithAggregatesFilter<"Device"> | string
    serialNumber?: StringWithAggregatesFilter<"Device"> | string
    status?: StringWithAggregatesFilter<"Device"> | string
    notes?: StringNullableWithAggregatesFilter<"Device"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Device"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type VisitWhereInput = {
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    id?: IntFilter<"Visit"> | number
    userId?: IntFilter<"Visit"> | number
    schoolId?: IntFilter<"Visit"> | number
    visitDate?: DateTimeFilter<"Visit"> | Date | string
    gpsLatitude?: FloatNullableFilter<"Visit"> | number | null
    gpsLongitude?: FloatNullableFilter<"Visit"> | number | null
    notes?: StringNullableFilter<"Visit"> | string | null
    photo?: StringNullableFilter<"Visit"> | string | null
    createdAt?: DateTimeFilter<"Visit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    visitPhotos?: VisitPhotoListRelationFilter
  }

  export type VisitOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    visitDate?: SortOrder
    gpsLatitude?: SortOrderInput | SortOrder
    gpsLongitude?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
    visitPhotos?: VisitPhotoOrderByRelationAggregateInput
  }

  export type VisitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    userId?: IntFilter<"Visit"> | number
    schoolId?: IntFilter<"Visit"> | number
    visitDate?: DateTimeFilter<"Visit"> | Date | string
    gpsLatitude?: FloatNullableFilter<"Visit"> | number | null
    gpsLongitude?: FloatNullableFilter<"Visit"> | number | null
    notes?: StringNullableFilter<"Visit"> | string | null
    photo?: StringNullableFilter<"Visit"> | string | null
    createdAt?: DateTimeFilter<"Visit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    visitPhotos?: VisitPhotoListRelationFilter
  }, "id">

  export type VisitOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    visitDate?: SortOrder
    gpsLatitude?: SortOrderInput | SortOrder
    gpsLongitude?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VisitCountOrderByAggregateInput
    _avg?: VisitAvgOrderByAggregateInput
    _max?: VisitMaxOrderByAggregateInput
    _min?: VisitMinOrderByAggregateInput
    _sum?: VisitSumOrderByAggregateInput
  }

  export type VisitScalarWhereWithAggregatesInput = {
    AND?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    OR?: VisitScalarWhereWithAggregatesInput[]
    NOT?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visit"> | number
    userId?: IntWithAggregatesFilter<"Visit"> | number
    schoolId?: IntWithAggregatesFilter<"Visit"> | number
    visitDate?: DateTimeWithAggregatesFilter<"Visit"> | Date | string
    gpsLatitude?: FloatNullableWithAggregatesFilter<"Visit"> | number | null
    gpsLongitude?: FloatNullableWithAggregatesFilter<"Visit"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Visit"> | Date | string
  }

  export type VisitPhotoWhereInput = {
    AND?: VisitPhotoWhereInput | VisitPhotoWhereInput[]
    OR?: VisitPhotoWhereInput[]
    NOT?: VisitPhotoWhereInput | VisitPhotoWhereInput[]
    id?: IntFilter<"VisitPhoto"> | number
    visitId?: IntFilter<"VisitPhoto"> | number
    photoUrl?: StringFilter<"VisitPhoto"> | string
    createdAt?: DateTimeFilter<"VisitPhoto"> | Date | string
    visit?: XOR<VisitScalarRelationFilter, VisitWhereInput>
  }

  export type VisitPhotoOrderByWithRelationInput = {
    id?: SortOrder
    visitId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    visit?: VisitOrderByWithRelationInput
  }

  export type VisitPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitPhotoWhereInput | VisitPhotoWhereInput[]
    OR?: VisitPhotoWhereInput[]
    NOT?: VisitPhotoWhereInput | VisitPhotoWhereInput[]
    visitId?: IntFilter<"VisitPhoto"> | number
    photoUrl?: StringFilter<"VisitPhoto"> | string
    createdAt?: DateTimeFilter<"VisitPhoto"> | Date | string
    visit?: XOR<VisitScalarRelationFilter, VisitWhereInput>
  }, "id">

  export type VisitPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    visitId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    _count?: VisitPhotoCountOrderByAggregateInput
    _avg?: VisitPhotoAvgOrderByAggregateInput
    _max?: VisitPhotoMaxOrderByAggregateInput
    _min?: VisitPhotoMinOrderByAggregateInput
    _sum?: VisitPhotoSumOrderByAggregateInput
  }

  export type VisitPhotoScalarWhereWithAggregatesInput = {
    AND?: VisitPhotoScalarWhereWithAggregatesInput | VisitPhotoScalarWhereWithAggregatesInput[]
    OR?: VisitPhotoScalarWhereWithAggregatesInput[]
    NOT?: VisitPhotoScalarWhereWithAggregatesInput | VisitPhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisitPhoto"> | number
    visitId?: IntWithAggregatesFilter<"VisitPhoto"> | number
    photoUrl?: StringWithAggregatesFilter<"VisitPhoto"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VisitPhoto"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    assignedSchools?: SchoolAssignmentCreateNestedManyWithoutUserInput
    visits?: VisitCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    assignedSchools?: SchoolAssignmentUncheckedCreateNestedManyWithoutUserInput
    visits?: VisitUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSchools?: SchoolAssignmentUpdateManyWithoutUserNestedInput
    visits?: VisitUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSchools?: SchoolAssignmentUncheckedUpdateManyWithoutUserNestedInput
    visits?: VisitUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateInput = {
    name: string
    code: string
    location: string
    county: string
    principal?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignments?: SchoolAssignmentCreateNestedManyWithoutSchoolInput
    devices?: DeviceCreateNestedManyWithoutSchoolInput
    visits?: VisitCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    location: string
    county: string
    principal?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignments?: SchoolAssignmentUncheckedCreateNestedManyWithoutSchoolInput
    devices?: DeviceUncheckedCreateNestedManyWithoutSchoolInput
    visits?: VisitUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: SchoolAssignmentUpdateManyWithoutSchoolNestedInput
    devices?: DeviceUpdateManyWithoutSchoolNestedInput
    visits?: VisitUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: SchoolAssignmentUncheckedUpdateManyWithoutSchoolNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutSchoolNestedInput
    visits?: VisitUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: number
    name: string
    code: string
    location: string
    county: string
    principal?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolAssignmentCreateInput = {
    user: UserCreateNestedOneWithoutAssignedSchoolsInput
    school: SchoolCreateNestedOneWithoutAssignmentsInput
  }

  export type SchoolAssignmentUncheckedCreateInput = {
    id?: number
    userId: number
    schoolId: number
  }

  export type SchoolAssignmentUpdateInput = {
    user?: UserUpdateOneRequiredWithoutAssignedSchoolsNestedInput
    school?: SchoolUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type SchoolAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolAssignmentCreateManyInput = {
    id?: number
    userId: number
    schoolId: number
  }

  export type SchoolAssignmentUpdateManyMutationInput = {

  }

  export type SchoolAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceCreateInput = {
    deviceType: string
    serialNumber: string
    status?: string
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutDevicesInput
    addedBy: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    schoolId: number
    addedById: number
    deviceType: string
    serialNumber: string
    status?: string
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type DeviceUpdateInput = {
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutDevicesNestedInput
    addedBy?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    addedById?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyInput = {
    id?: number
    schoolId: number
    addedById: number
    deviceType: string
    serialNumber: string
    status?: string
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    addedById?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitCreateInput = {
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVisitsInput
    school: SchoolCreateNestedOneWithoutVisitsInput
    visitPhotos?: VisitPhotoCreateNestedManyWithoutVisitInput
  }

  export type VisitUncheckedCreateInput = {
    id?: number
    userId: number
    schoolId: number
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    visitPhotos?: VisitPhotoUncheckedCreateNestedManyWithoutVisitInput
  }

  export type VisitUpdateInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVisitsNestedInput
    school?: SchoolUpdateOneRequiredWithoutVisitsNestedInput
    visitPhotos?: VisitPhotoUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitPhotos?: VisitPhotoUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type VisitCreateManyInput = {
    id?: number
    userId: number
    schoolId: number
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type VisitUpdateManyMutationInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitPhotoCreateInput = {
    photoUrl: string
    createdAt?: Date | string
    visit: VisitCreateNestedOneWithoutVisitPhotosInput
  }

  export type VisitPhotoUncheckedCreateInput = {
    id?: number
    visitId: number
    photoUrl: string
    createdAt?: Date | string
  }

  export type VisitPhotoUpdateInput = {
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visit?: VisitUpdateOneRequiredWithoutVisitPhotosNestedInput
  }

  export type VisitPhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitId?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitPhotoCreateManyInput = {
    id?: number
    visitId: number
    photoUrl: string
    createdAt?: Date | string
  }

  export type VisitPhotoUpdateManyMutationInput = {
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitPhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitId?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SchoolAssignmentListRelationFilter = {
    every?: SchoolAssignmentWhereInput
    some?: SchoolAssignmentWhereInput
    none?: SchoolAssignmentWhereInput
  }

  export type VisitListRelationFilter = {
    every?: VisitWhereInput
    some?: VisitWhereInput
    none?: VisitWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type SchoolAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrder
    county?: SortOrder
    principal?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrder
    county?: SortOrder
    principal?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrder
    county?: SortOrder
    principal?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type SchoolAssignmentUserIdSchoolIdCompoundUniqueInput = {
    userId: number
    schoolId: number
  }

  export type SchoolAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    addedById?: SortOrder
    deviceType?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    addedById?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    addedById?: SortOrder
    deviceType?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    addedById?: SortOrder
    deviceType?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    addedById?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VisitPhotoListRelationFilter = {
    every?: VisitPhotoWhereInput
    some?: VisitPhotoWhereInput
    none?: VisitPhotoWhereInput
  }

  export type VisitPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    visitDate?: SortOrder
    gpsLatitude?: SortOrder
    gpsLongitude?: SortOrder
    notes?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type VisitAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    gpsLatitude?: SortOrder
    gpsLongitude?: SortOrder
  }

  export type VisitMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    visitDate?: SortOrder
    gpsLatitude?: SortOrder
    gpsLongitude?: SortOrder
    notes?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type VisitMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    visitDate?: SortOrder
    gpsLatitude?: SortOrder
    gpsLongitude?: SortOrder
    notes?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type VisitSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    gpsLatitude?: SortOrder
    gpsLongitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VisitScalarRelationFilter = {
    is?: VisitWhereInput
    isNot?: VisitWhereInput
  }

  export type VisitPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    visitId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type VisitPhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    visitId?: SortOrder
  }

  export type VisitPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    visitId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type VisitPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    visitId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type VisitPhotoSumOrderByAggregateInput = {
    id?: SortOrder
    visitId?: SortOrder
  }

  export type SchoolAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<SchoolAssignmentCreateWithoutUserInput, SchoolAssignmentUncheckedCreateWithoutUserInput> | SchoolAssignmentCreateWithoutUserInput[] | SchoolAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolAssignmentCreateOrConnectWithoutUserInput | SchoolAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: SchoolAssignmentCreateManyUserInputEnvelope
    connect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
  }

  export type VisitCreateNestedManyWithoutUserInput = {
    create?: XOR<VisitCreateWithoutUserInput, VisitUncheckedCreateWithoutUserInput> | VisitCreateWithoutUserInput[] | VisitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutUserInput | VisitCreateOrConnectWithoutUserInput[]
    createMany?: VisitCreateManyUserInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutAddedByInput = {
    create?: XOR<DeviceCreateWithoutAddedByInput, DeviceUncheckedCreateWithoutAddedByInput> | DeviceCreateWithoutAddedByInput[] | DeviceUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutAddedByInput | DeviceCreateOrConnectWithoutAddedByInput[]
    createMany?: DeviceCreateManyAddedByInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type SchoolAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SchoolAssignmentCreateWithoutUserInput, SchoolAssignmentUncheckedCreateWithoutUserInput> | SchoolAssignmentCreateWithoutUserInput[] | SchoolAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolAssignmentCreateOrConnectWithoutUserInput | SchoolAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: SchoolAssignmentCreateManyUserInputEnvelope
    connect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
  }

  export type VisitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VisitCreateWithoutUserInput, VisitUncheckedCreateWithoutUserInput> | VisitCreateWithoutUserInput[] | VisitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutUserInput | VisitCreateOrConnectWithoutUserInput[]
    createMany?: VisitCreateManyUserInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutAddedByInput = {
    create?: XOR<DeviceCreateWithoutAddedByInput, DeviceUncheckedCreateWithoutAddedByInput> | DeviceCreateWithoutAddedByInput[] | DeviceUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutAddedByInput | DeviceCreateOrConnectWithoutAddedByInput[]
    createMany?: DeviceCreateManyAddedByInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SchoolAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchoolAssignmentCreateWithoutUserInput, SchoolAssignmentUncheckedCreateWithoutUserInput> | SchoolAssignmentCreateWithoutUserInput[] | SchoolAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolAssignmentCreateOrConnectWithoutUserInput | SchoolAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: SchoolAssignmentUpsertWithWhereUniqueWithoutUserInput | SchoolAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchoolAssignmentCreateManyUserInputEnvelope
    set?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    disconnect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    delete?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    connect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    update?: SchoolAssignmentUpdateWithWhereUniqueWithoutUserInput | SchoolAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchoolAssignmentUpdateManyWithWhereWithoutUserInput | SchoolAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchoolAssignmentScalarWhereInput | SchoolAssignmentScalarWhereInput[]
  }

  export type VisitUpdateManyWithoutUserNestedInput = {
    create?: XOR<VisitCreateWithoutUserInput, VisitUncheckedCreateWithoutUserInput> | VisitCreateWithoutUserInput[] | VisitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutUserInput | VisitCreateOrConnectWithoutUserInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutUserInput | VisitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VisitCreateManyUserInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutUserInput | VisitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutUserInput | VisitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<DeviceCreateWithoutAddedByInput, DeviceUncheckedCreateWithoutAddedByInput> | DeviceCreateWithoutAddedByInput[] | DeviceUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutAddedByInput | DeviceCreateOrConnectWithoutAddedByInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutAddedByInput | DeviceUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: DeviceCreateManyAddedByInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutAddedByInput | DeviceUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutAddedByInput | DeviceUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchoolAssignmentCreateWithoutUserInput, SchoolAssignmentUncheckedCreateWithoutUserInput> | SchoolAssignmentCreateWithoutUserInput[] | SchoolAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolAssignmentCreateOrConnectWithoutUserInput | SchoolAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: SchoolAssignmentUpsertWithWhereUniqueWithoutUserInput | SchoolAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchoolAssignmentCreateManyUserInputEnvelope
    set?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    disconnect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    delete?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    connect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    update?: SchoolAssignmentUpdateWithWhereUniqueWithoutUserInput | SchoolAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchoolAssignmentUpdateManyWithWhereWithoutUserInput | SchoolAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchoolAssignmentScalarWhereInput | SchoolAssignmentScalarWhereInput[]
  }

  export type VisitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VisitCreateWithoutUserInput, VisitUncheckedCreateWithoutUserInput> | VisitCreateWithoutUserInput[] | VisitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutUserInput | VisitCreateOrConnectWithoutUserInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutUserInput | VisitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VisitCreateManyUserInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutUserInput | VisitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutUserInput | VisitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<DeviceCreateWithoutAddedByInput, DeviceUncheckedCreateWithoutAddedByInput> | DeviceCreateWithoutAddedByInput[] | DeviceUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutAddedByInput | DeviceCreateOrConnectWithoutAddedByInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutAddedByInput | DeviceUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: DeviceCreateManyAddedByInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutAddedByInput | DeviceUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutAddedByInput | DeviceUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type SchoolAssignmentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolAssignmentCreateWithoutSchoolInput, SchoolAssignmentUncheckedCreateWithoutSchoolInput> | SchoolAssignmentCreateWithoutSchoolInput[] | SchoolAssignmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolAssignmentCreateOrConnectWithoutSchoolInput | SchoolAssignmentCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolAssignmentCreateManySchoolInputEnvelope
    connect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutSchoolInput = {
    create?: XOR<DeviceCreateWithoutSchoolInput, DeviceUncheckedCreateWithoutSchoolInput> | DeviceCreateWithoutSchoolInput[] | DeviceUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutSchoolInput | DeviceCreateOrConnectWithoutSchoolInput[]
    createMany?: DeviceCreateManySchoolInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type VisitCreateNestedManyWithoutSchoolInput = {
    create?: XOR<VisitCreateWithoutSchoolInput, VisitUncheckedCreateWithoutSchoolInput> | VisitCreateWithoutSchoolInput[] | VisitUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutSchoolInput | VisitCreateOrConnectWithoutSchoolInput[]
    createMany?: VisitCreateManySchoolInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type SchoolAssignmentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolAssignmentCreateWithoutSchoolInput, SchoolAssignmentUncheckedCreateWithoutSchoolInput> | SchoolAssignmentCreateWithoutSchoolInput[] | SchoolAssignmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolAssignmentCreateOrConnectWithoutSchoolInput | SchoolAssignmentCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolAssignmentCreateManySchoolInputEnvelope
    connect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<DeviceCreateWithoutSchoolInput, DeviceUncheckedCreateWithoutSchoolInput> | DeviceCreateWithoutSchoolInput[] | DeviceUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutSchoolInput | DeviceCreateOrConnectWithoutSchoolInput[]
    createMany?: DeviceCreateManySchoolInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type VisitUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<VisitCreateWithoutSchoolInput, VisitUncheckedCreateWithoutSchoolInput> | VisitCreateWithoutSchoolInput[] | VisitUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutSchoolInput | VisitCreateOrConnectWithoutSchoolInput[]
    createMany?: VisitCreateManySchoolInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SchoolAssignmentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolAssignmentCreateWithoutSchoolInput, SchoolAssignmentUncheckedCreateWithoutSchoolInput> | SchoolAssignmentCreateWithoutSchoolInput[] | SchoolAssignmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolAssignmentCreateOrConnectWithoutSchoolInput | SchoolAssignmentCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolAssignmentUpsertWithWhereUniqueWithoutSchoolInput | SchoolAssignmentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolAssignmentCreateManySchoolInputEnvelope
    set?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    disconnect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    delete?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    connect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    update?: SchoolAssignmentUpdateWithWhereUniqueWithoutSchoolInput | SchoolAssignmentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolAssignmentUpdateManyWithWhereWithoutSchoolInput | SchoolAssignmentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolAssignmentScalarWhereInput | SchoolAssignmentScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<DeviceCreateWithoutSchoolInput, DeviceUncheckedCreateWithoutSchoolInput> | DeviceCreateWithoutSchoolInput[] | DeviceUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutSchoolInput | DeviceCreateOrConnectWithoutSchoolInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutSchoolInput | DeviceUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: DeviceCreateManySchoolInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutSchoolInput | DeviceUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutSchoolInput | DeviceUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type VisitUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<VisitCreateWithoutSchoolInput, VisitUncheckedCreateWithoutSchoolInput> | VisitCreateWithoutSchoolInput[] | VisitUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutSchoolInput | VisitCreateOrConnectWithoutSchoolInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutSchoolInput | VisitUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: VisitCreateManySchoolInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutSchoolInput | VisitUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutSchoolInput | VisitUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type SchoolAssignmentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolAssignmentCreateWithoutSchoolInput, SchoolAssignmentUncheckedCreateWithoutSchoolInput> | SchoolAssignmentCreateWithoutSchoolInput[] | SchoolAssignmentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolAssignmentCreateOrConnectWithoutSchoolInput | SchoolAssignmentCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolAssignmentUpsertWithWhereUniqueWithoutSchoolInput | SchoolAssignmentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolAssignmentCreateManySchoolInputEnvelope
    set?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    disconnect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    delete?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    connect?: SchoolAssignmentWhereUniqueInput | SchoolAssignmentWhereUniqueInput[]
    update?: SchoolAssignmentUpdateWithWhereUniqueWithoutSchoolInput | SchoolAssignmentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolAssignmentUpdateManyWithWhereWithoutSchoolInput | SchoolAssignmentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolAssignmentScalarWhereInput | SchoolAssignmentScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<DeviceCreateWithoutSchoolInput, DeviceUncheckedCreateWithoutSchoolInput> | DeviceCreateWithoutSchoolInput[] | DeviceUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutSchoolInput | DeviceCreateOrConnectWithoutSchoolInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutSchoolInput | DeviceUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: DeviceCreateManySchoolInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutSchoolInput | DeviceUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutSchoolInput | DeviceUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type VisitUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<VisitCreateWithoutSchoolInput, VisitUncheckedCreateWithoutSchoolInput> | VisitCreateWithoutSchoolInput[] | VisitUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutSchoolInput | VisitCreateOrConnectWithoutSchoolInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutSchoolInput | VisitUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: VisitCreateManySchoolInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutSchoolInput | VisitUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutSchoolInput | VisitUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAssignedSchoolsInput = {
    create?: XOR<UserCreateWithoutAssignedSchoolsInput, UserUncheckedCreateWithoutAssignedSchoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedSchoolsInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<SchoolCreateWithoutAssignmentsInput, SchoolUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAssignmentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAssignedSchoolsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedSchoolsInput, UserUncheckedCreateWithoutAssignedSchoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedSchoolsInput
    upsert?: UserUpsertWithoutAssignedSchoolsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedSchoolsInput, UserUpdateWithoutAssignedSchoolsInput>, UserUncheckedUpdateWithoutAssignedSchoolsInput>
  }

  export type SchoolUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<SchoolCreateWithoutAssignmentsInput, SchoolUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAssignmentsInput
    upsert?: SchoolUpsertWithoutAssignmentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutAssignmentsInput, SchoolUpdateWithoutAssignmentsInput>, SchoolUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SchoolCreateNestedOneWithoutDevicesInput = {
    create?: XOR<SchoolCreateWithoutDevicesInput, SchoolUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutDevicesInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<SchoolCreateWithoutDevicesInput, SchoolUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutDevicesInput
    upsert?: SchoolUpsertWithoutDevicesInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutDevicesInput, SchoolUpdateWithoutDevicesInput>, SchoolUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserCreateNestedOneWithoutVisitsInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutVisitsInput = {
    create?: XOR<SchoolCreateWithoutVisitsInput, SchoolUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutVisitsInput
    connect?: SchoolWhereUniqueInput
  }

  export type VisitPhotoCreateNestedManyWithoutVisitInput = {
    create?: XOR<VisitPhotoCreateWithoutVisitInput, VisitPhotoUncheckedCreateWithoutVisitInput> | VisitPhotoCreateWithoutVisitInput[] | VisitPhotoUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: VisitPhotoCreateOrConnectWithoutVisitInput | VisitPhotoCreateOrConnectWithoutVisitInput[]
    createMany?: VisitPhotoCreateManyVisitInputEnvelope
    connect?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
  }

  export type VisitPhotoUncheckedCreateNestedManyWithoutVisitInput = {
    create?: XOR<VisitPhotoCreateWithoutVisitInput, VisitPhotoUncheckedCreateWithoutVisitInput> | VisitPhotoCreateWithoutVisitInput[] | VisitPhotoUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: VisitPhotoCreateOrConnectWithoutVisitInput | VisitPhotoCreateOrConnectWithoutVisitInput[]
    createMany?: VisitPhotoCreateManyVisitInputEnvelope
    connect?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    upsert?: UserUpsertWithoutVisitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisitsInput, UserUpdateWithoutVisitsInput>, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type SchoolUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<SchoolCreateWithoutVisitsInput, SchoolUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutVisitsInput
    upsert?: SchoolUpsertWithoutVisitsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutVisitsInput, SchoolUpdateWithoutVisitsInput>, SchoolUncheckedUpdateWithoutVisitsInput>
  }

  export type VisitPhotoUpdateManyWithoutVisitNestedInput = {
    create?: XOR<VisitPhotoCreateWithoutVisitInput, VisitPhotoUncheckedCreateWithoutVisitInput> | VisitPhotoCreateWithoutVisitInput[] | VisitPhotoUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: VisitPhotoCreateOrConnectWithoutVisitInput | VisitPhotoCreateOrConnectWithoutVisitInput[]
    upsert?: VisitPhotoUpsertWithWhereUniqueWithoutVisitInput | VisitPhotoUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: VisitPhotoCreateManyVisitInputEnvelope
    set?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
    disconnect?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
    delete?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
    connect?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
    update?: VisitPhotoUpdateWithWhereUniqueWithoutVisitInput | VisitPhotoUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: VisitPhotoUpdateManyWithWhereWithoutVisitInput | VisitPhotoUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: VisitPhotoScalarWhereInput | VisitPhotoScalarWhereInput[]
  }

  export type VisitPhotoUncheckedUpdateManyWithoutVisitNestedInput = {
    create?: XOR<VisitPhotoCreateWithoutVisitInput, VisitPhotoUncheckedCreateWithoutVisitInput> | VisitPhotoCreateWithoutVisitInput[] | VisitPhotoUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: VisitPhotoCreateOrConnectWithoutVisitInput | VisitPhotoCreateOrConnectWithoutVisitInput[]
    upsert?: VisitPhotoUpsertWithWhereUniqueWithoutVisitInput | VisitPhotoUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: VisitPhotoCreateManyVisitInputEnvelope
    set?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
    disconnect?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
    delete?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
    connect?: VisitPhotoWhereUniqueInput | VisitPhotoWhereUniqueInput[]
    update?: VisitPhotoUpdateWithWhereUniqueWithoutVisitInput | VisitPhotoUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: VisitPhotoUpdateManyWithWhereWithoutVisitInput | VisitPhotoUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: VisitPhotoScalarWhereInput | VisitPhotoScalarWhereInput[]
  }

  export type VisitCreateNestedOneWithoutVisitPhotosInput = {
    create?: XOR<VisitCreateWithoutVisitPhotosInput, VisitUncheckedCreateWithoutVisitPhotosInput>
    connectOrCreate?: VisitCreateOrConnectWithoutVisitPhotosInput
    connect?: VisitWhereUniqueInput
  }

  export type VisitUpdateOneRequiredWithoutVisitPhotosNestedInput = {
    create?: XOR<VisitCreateWithoutVisitPhotosInput, VisitUncheckedCreateWithoutVisitPhotosInput>
    connectOrCreate?: VisitCreateOrConnectWithoutVisitPhotosInput
    upsert?: VisitUpsertWithoutVisitPhotosInput
    connect?: VisitWhereUniqueInput
    update?: XOR<XOR<VisitUpdateToOneWithWhereWithoutVisitPhotosInput, VisitUpdateWithoutVisitPhotosInput>, VisitUncheckedUpdateWithoutVisitPhotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SchoolAssignmentCreateWithoutUserInput = {
    school: SchoolCreateNestedOneWithoutAssignmentsInput
  }

  export type SchoolAssignmentUncheckedCreateWithoutUserInput = {
    id?: number
    schoolId: number
  }

  export type SchoolAssignmentCreateOrConnectWithoutUserInput = {
    where: SchoolAssignmentWhereUniqueInput
    create: XOR<SchoolAssignmentCreateWithoutUserInput, SchoolAssignmentUncheckedCreateWithoutUserInput>
  }

  export type SchoolAssignmentCreateManyUserInputEnvelope = {
    data: SchoolAssignmentCreateManyUserInput | SchoolAssignmentCreateManyUserInput[]
  }

  export type VisitCreateWithoutUserInput = {
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutVisitsInput
    visitPhotos?: VisitPhotoCreateNestedManyWithoutVisitInput
  }

  export type VisitUncheckedCreateWithoutUserInput = {
    id?: number
    schoolId: number
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    visitPhotos?: VisitPhotoUncheckedCreateNestedManyWithoutVisitInput
  }

  export type VisitCreateOrConnectWithoutUserInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutUserInput, VisitUncheckedCreateWithoutUserInput>
  }

  export type VisitCreateManyUserInputEnvelope = {
    data: VisitCreateManyUserInput | VisitCreateManyUserInput[]
  }

  export type DeviceCreateWithoutAddedByInput = {
    deviceType: string
    serialNumber: string
    status?: string
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutAddedByInput = {
    id?: number
    schoolId: number
    deviceType: string
    serialNumber: string
    status?: string
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutAddedByInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutAddedByInput, DeviceUncheckedCreateWithoutAddedByInput>
  }

  export type DeviceCreateManyAddedByInputEnvelope = {
    data: DeviceCreateManyAddedByInput | DeviceCreateManyAddedByInput[]
  }

  export type SchoolAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: SchoolAssignmentWhereUniqueInput
    update: XOR<SchoolAssignmentUpdateWithoutUserInput, SchoolAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<SchoolAssignmentCreateWithoutUserInput, SchoolAssignmentUncheckedCreateWithoutUserInput>
  }

  export type SchoolAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: SchoolAssignmentWhereUniqueInput
    data: XOR<SchoolAssignmentUpdateWithoutUserInput, SchoolAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type SchoolAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: SchoolAssignmentScalarWhereInput
    data: XOR<SchoolAssignmentUpdateManyMutationInput, SchoolAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type SchoolAssignmentScalarWhereInput = {
    AND?: SchoolAssignmentScalarWhereInput | SchoolAssignmentScalarWhereInput[]
    OR?: SchoolAssignmentScalarWhereInput[]
    NOT?: SchoolAssignmentScalarWhereInput | SchoolAssignmentScalarWhereInput[]
    id?: IntFilter<"SchoolAssignment"> | number
    userId?: IntFilter<"SchoolAssignment"> | number
    schoolId?: IntFilter<"SchoolAssignment"> | number
  }

  export type VisitUpsertWithWhereUniqueWithoutUserInput = {
    where: VisitWhereUniqueInput
    update: XOR<VisitUpdateWithoutUserInput, VisitUncheckedUpdateWithoutUserInput>
    create: XOR<VisitCreateWithoutUserInput, VisitUncheckedCreateWithoutUserInput>
  }

  export type VisitUpdateWithWhereUniqueWithoutUserInput = {
    where: VisitWhereUniqueInput
    data: XOR<VisitUpdateWithoutUserInput, VisitUncheckedUpdateWithoutUserInput>
  }

  export type VisitUpdateManyWithWhereWithoutUserInput = {
    where: VisitScalarWhereInput
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyWithoutUserInput>
  }

  export type VisitScalarWhereInput = {
    AND?: VisitScalarWhereInput | VisitScalarWhereInput[]
    OR?: VisitScalarWhereInput[]
    NOT?: VisitScalarWhereInput | VisitScalarWhereInput[]
    id?: IntFilter<"Visit"> | number
    userId?: IntFilter<"Visit"> | number
    schoolId?: IntFilter<"Visit"> | number
    visitDate?: DateTimeFilter<"Visit"> | Date | string
    gpsLatitude?: FloatNullableFilter<"Visit"> | number | null
    gpsLongitude?: FloatNullableFilter<"Visit"> | number | null
    notes?: StringNullableFilter<"Visit"> | string | null
    photo?: StringNullableFilter<"Visit"> | string | null
    createdAt?: DateTimeFilter<"Visit"> | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutAddedByInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutAddedByInput, DeviceUncheckedUpdateWithoutAddedByInput>
    create: XOR<DeviceCreateWithoutAddedByInput, DeviceUncheckedCreateWithoutAddedByInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutAddedByInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutAddedByInput, DeviceUncheckedUpdateWithoutAddedByInput>
  }

  export type DeviceUpdateManyWithWhereWithoutAddedByInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutAddedByInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: IntFilter<"Device"> | number
    schoolId?: IntFilter<"Device"> | number
    addedById?: IntFilter<"Device"> | number
    deviceType?: StringFilter<"Device"> | string
    serialNumber?: StringFilter<"Device"> | string
    status?: StringFilter<"Device"> | string
    notes?: StringNullableFilter<"Device"> | string | null
    photo?: StringNullableFilter<"Device"> | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type SchoolAssignmentCreateWithoutSchoolInput = {
    user: UserCreateNestedOneWithoutAssignedSchoolsInput
  }

  export type SchoolAssignmentUncheckedCreateWithoutSchoolInput = {
    id?: number
    userId: number
  }

  export type SchoolAssignmentCreateOrConnectWithoutSchoolInput = {
    where: SchoolAssignmentWhereUniqueInput
    create: XOR<SchoolAssignmentCreateWithoutSchoolInput, SchoolAssignmentUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolAssignmentCreateManySchoolInputEnvelope = {
    data: SchoolAssignmentCreateManySchoolInput | SchoolAssignmentCreateManySchoolInput[]
  }

  export type DeviceCreateWithoutSchoolInput = {
    deviceType: string
    serialNumber: string
    status?: string
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    addedBy: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutSchoolInput = {
    id?: number
    addedById: number
    deviceType: string
    serialNumber: string
    status?: string
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutSchoolInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSchoolInput, DeviceUncheckedCreateWithoutSchoolInput>
  }

  export type DeviceCreateManySchoolInputEnvelope = {
    data: DeviceCreateManySchoolInput | DeviceCreateManySchoolInput[]
  }

  export type VisitCreateWithoutSchoolInput = {
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVisitsInput
    visitPhotos?: VisitPhotoCreateNestedManyWithoutVisitInput
  }

  export type VisitUncheckedCreateWithoutSchoolInput = {
    id?: number
    userId: number
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    visitPhotos?: VisitPhotoUncheckedCreateNestedManyWithoutVisitInput
  }

  export type VisitCreateOrConnectWithoutSchoolInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutSchoolInput, VisitUncheckedCreateWithoutSchoolInput>
  }

  export type VisitCreateManySchoolInputEnvelope = {
    data: VisitCreateManySchoolInput | VisitCreateManySchoolInput[]
  }

  export type SchoolAssignmentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: SchoolAssignmentWhereUniqueInput
    update: XOR<SchoolAssignmentUpdateWithoutSchoolInput, SchoolAssignmentUncheckedUpdateWithoutSchoolInput>
    create: XOR<SchoolAssignmentCreateWithoutSchoolInput, SchoolAssignmentUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolAssignmentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: SchoolAssignmentWhereUniqueInput
    data: XOR<SchoolAssignmentUpdateWithoutSchoolInput, SchoolAssignmentUncheckedUpdateWithoutSchoolInput>
  }

  export type SchoolAssignmentUpdateManyWithWhereWithoutSchoolInput = {
    where: SchoolAssignmentScalarWhereInput
    data: XOR<SchoolAssignmentUpdateManyMutationInput, SchoolAssignmentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type DeviceUpsertWithWhereUniqueWithoutSchoolInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutSchoolInput, DeviceUncheckedUpdateWithoutSchoolInput>
    create: XOR<DeviceCreateWithoutSchoolInput, DeviceUncheckedCreateWithoutSchoolInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutSchoolInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutSchoolInput, DeviceUncheckedUpdateWithoutSchoolInput>
  }

  export type DeviceUpdateManyWithWhereWithoutSchoolInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutSchoolInput>
  }

  export type VisitUpsertWithWhereUniqueWithoutSchoolInput = {
    where: VisitWhereUniqueInput
    update: XOR<VisitUpdateWithoutSchoolInput, VisitUncheckedUpdateWithoutSchoolInput>
    create: XOR<VisitCreateWithoutSchoolInput, VisitUncheckedCreateWithoutSchoolInput>
  }

  export type VisitUpdateWithWhereUniqueWithoutSchoolInput = {
    where: VisitWhereUniqueInput
    data: XOR<VisitUpdateWithoutSchoolInput, VisitUncheckedUpdateWithoutSchoolInput>
  }

  export type VisitUpdateManyWithWhereWithoutSchoolInput = {
    where: VisitScalarWhereInput
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyWithoutSchoolInput>
  }

  export type UserCreateWithoutAssignedSchoolsInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    visits?: VisitCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutAssignedSchoolsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    visits?: VisitUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutAssignedSchoolsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedSchoolsInput, UserUncheckedCreateWithoutAssignedSchoolsInput>
  }

  export type SchoolCreateWithoutAssignmentsInput = {
    name: string
    code: string
    location: string
    county: string
    principal?: string | null
    phone?: string | null
    createdAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutSchoolInput
    visits?: VisitCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    name: string
    code: string
    location: string
    county: string
    principal?: string | null
    phone?: string | null
    createdAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutSchoolInput
    visits?: VisitUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutAssignmentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutAssignmentsInput, SchoolUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserUpsertWithoutAssignedSchoolsInput = {
    update: XOR<UserUpdateWithoutAssignedSchoolsInput, UserUncheckedUpdateWithoutAssignedSchoolsInput>
    create: XOR<UserCreateWithoutAssignedSchoolsInput, UserUncheckedCreateWithoutAssignedSchoolsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedSchoolsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedSchoolsInput, UserUncheckedUpdateWithoutAssignedSchoolsInput>
  }

  export type UserUpdateWithoutAssignedSchoolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: VisitUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedSchoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: VisitUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type SchoolUpsertWithoutAssignmentsInput = {
    update: XOR<SchoolUpdateWithoutAssignmentsInput, SchoolUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<SchoolCreateWithoutAssignmentsInput, SchoolUncheckedCreateWithoutAssignmentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutAssignmentsInput, SchoolUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SchoolUpdateWithoutAssignmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutSchoolNestedInput
    visits?: VisitUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutSchoolNestedInput
    visits?: VisitUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutDevicesInput = {
    name: string
    code: string
    location: string
    county: string
    principal?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignments?: SchoolAssignmentCreateNestedManyWithoutSchoolInput
    visits?: VisitCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutDevicesInput = {
    id?: number
    name: string
    code: string
    location: string
    county: string
    principal?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignments?: SchoolAssignmentUncheckedCreateNestedManyWithoutSchoolInput
    visits?: VisitUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutDevicesInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutDevicesInput, SchoolUncheckedCreateWithoutDevicesInput>
  }

  export type UserCreateWithoutDevicesInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    assignedSchools?: SchoolAssignmentCreateNestedManyWithoutUserInput
    visits?: VisitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    assignedSchools?: SchoolAssignmentUncheckedCreateNestedManyWithoutUserInput
    visits?: VisitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type SchoolUpsertWithoutDevicesInput = {
    update: XOR<SchoolUpdateWithoutDevicesInput, SchoolUncheckedUpdateWithoutDevicesInput>
    create: XOR<SchoolCreateWithoutDevicesInput, SchoolUncheckedCreateWithoutDevicesInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutDevicesInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutDevicesInput, SchoolUncheckedUpdateWithoutDevicesInput>
  }

  export type SchoolUpdateWithoutDevicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: SchoolAssignmentUpdateManyWithoutSchoolNestedInput
    visits?: VisitUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: SchoolAssignmentUncheckedUpdateManyWithoutSchoolNestedInput
    visits?: VisitUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSchools?: SchoolAssignmentUpdateManyWithoutUserNestedInput
    visits?: VisitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSchools?: SchoolAssignmentUncheckedUpdateManyWithoutUserNestedInput
    visits?: VisitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVisitsInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    assignedSchools?: SchoolAssignmentCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutVisitsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    assignedSchools?: SchoolAssignmentUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutVisitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
  }

  export type SchoolCreateWithoutVisitsInput = {
    name: string
    code: string
    location: string
    county: string
    principal?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignments?: SchoolAssignmentCreateNestedManyWithoutSchoolInput
    devices?: DeviceCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutVisitsInput = {
    id?: number
    name: string
    code: string
    location: string
    county: string
    principal?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignments?: SchoolAssignmentUncheckedCreateNestedManyWithoutSchoolInput
    devices?: DeviceUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutVisitsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutVisitsInput, SchoolUncheckedCreateWithoutVisitsInput>
  }

  export type VisitPhotoCreateWithoutVisitInput = {
    photoUrl: string
    createdAt?: Date | string
  }

  export type VisitPhotoUncheckedCreateWithoutVisitInput = {
    id?: number
    photoUrl: string
    createdAt?: Date | string
  }

  export type VisitPhotoCreateOrConnectWithoutVisitInput = {
    where: VisitPhotoWhereUniqueInput
    create: XOR<VisitPhotoCreateWithoutVisitInput, VisitPhotoUncheckedCreateWithoutVisitInput>
  }

  export type VisitPhotoCreateManyVisitInputEnvelope = {
    data: VisitPhotoCreateManyVisitInput | VisitPhotoCreateManyVisitInput[]
  }

  export type UserUpsertWithoutVisitsInput = {
    update: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type UserUpdateWithoutVisitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSchools?: SchoolAssignmentUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedSchools?: SchoolAssignmentUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type SchoolUpsertWithoutVisitsInput = {
    update: XOR<SchoolUpdateWithoutVisitsInput, SchoolUncheckedUpdateWithoutVisitsInput>
    create: XOR<SchoolCreateWithoutVisitsInput, SchoolUncheckedCreateWithoutVisitsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutVisitsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutVisitsInput, SchoolUncheckedUpdateWithoutVisitsInput>
  }

  export type SchoolUpdateWithoutVisitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: SchoolAssignmentUpdateManyWithoutSchoolNestedInput
    devices?: DeviceUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    principal?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: SchoolAssignmentUncheckedUpdateManyWithoutSchoolNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type VisitPhotoUpsertWithWhereUniqueWithoutVisitInput = {
    where: VisitPhotoWhereUniqueInput
    update: XOR<VisitPhotoUpdateWithoutVisitInput, VisitPhotoUncheckedUpdateWithoutVisitInput>
    create: XOR<VisitPhotoCreateWithoutVisitInput, VisitPhotoUncheckedCreateWithoutVisitInput>
  }

  export type VisitPhotoUpdateWithWhereUniqueWithoutVisitInput = {
    where: VisitPhotoWhereUniqueInput
    data: XOR<VisitPhotoUpdateWithoutVisitInput, VisitPhotoUncheckedUpdateWithoutVisitInput>
  }

  export type VisitPhotoUpdateManyWithWhereWithoutVisitInput = {
    where: VisitPhotoScalarWhereInput
    data: XOR<VisitPhotoUpdateManyMutationInput, VisitPhotoUncheckedUpdateManyWithoutVisitInput>
  }

  export type VisitPhotoScalarWhereInput = {
    AND?: VisitPhotoScalarWhereInput | VisitPhotoScalarWhereInput[]
    OR?: VisitPhotoScalarWhereInput[]
    NOT?: VisitPhotoScalarWhereInput | VisitPhotoScalarWhereInput[]
    id?: IntFilter<"VisitPhoto"> | number
    visitId?: IntFilter<"VisitPhoto"> | number
    photoUrl?: StringFilter<"VisitPhoto"> | string
    createdAt?: DateTimeFilter<"VisitPhoto"> | Date | string
  }

  export type VisitCreateWithoutVisitPhotosInput = {
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVisitsInput
    school: SchoolCreateNestedOneWithoutVisitsInput
  }

  export type VisitUncheckedCreateWithoutVisitPhotosInput = {
    id?: number
    userId: number
    schoolId: number
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type VisitCreateOrConnectWithoutVisitPhotosInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutVisitPhotosInput, VisitUncheckedCreateWithoutVisitPhotosInput>
  }

  export type VisitUpsertWithoutVisitPhotosInput = {
    update: XOR<VisitUpdateWithoutVisitPhotosInput, VisitUncheckedUpdateWithoutVisitPhotosInput>
    create: XOR<VisitCreateWithoutVisitPhotosInput, VisitUncheckedCreateWithoutVisitPhotosInput>
    where?: VisitWhereInput
  }

  export type VisitUpdateToOneWithWhereWithoutVisitPhotosInput = {
    where?: VisitWhereInput
    data: XOR<VisitUpdateWithoutVisitPhotosInput, VisitUncheckedUpdateWithoutVisitPhotosInput>
  }

  export type VisitUpdateWithoutVisitPhotosInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVisitsNestedInput
    school?: SchoolUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type VisitUncheckedUpdateWithoutVisitPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolAssignmentCreateManyUserInput = {
    id?: number
    schoolId: number
  }

  export type VisitCreateManyUserInput = {
    id?: number
    schoolId: number
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type DeviceCreateManyAddedByInput = {
    id?: number
    schoolId: number
    deviceType: string
    serialNumber: string
    status?: string
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type SchoolAssignmentUpdateWithoutUserInput = {
    school?: SchoolUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type SchoolAssignmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitUpdateWithoutUserInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutVisitsNestedInput
    visitPhotos?: VisitPhotoUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitPhotos?: VisitPhotoUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpdateWithoutAddedByInput = {
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutAddedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyWithoutAddedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolAssignmentCreateManySchoolInput = {
    id?: number
    userId: number
  }

  export type DeviceCreateManySchoolInput = {
    id?: number
    addedById: number
    deviceType: string
    serialNumber: string
    status?: string
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type VisitCreateManySchoolInput = {
    id?: number
    userId: number
    visitDate?: Date | string
    gpsLatitude?: number | null
    gpsLongitude?: number | null
    notes?: string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type SchoolAssignmentUpdateWithoutSchoolInput = {
    user?: UserUpdateOneRequiredWithoutAssignedSchoolsNestedInput
  }

  export type SchoolAssignmentUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolAssignmentUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUpdateWithoutSchoolInput = {
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    addedById?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    addedById?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitUpdateWithoutSchoolInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVisitsNestedInput
    visitPhotos?: VisitPhotoUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitPhotos?: VisitPhotoUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gpsLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    gpsLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitPhotoCreateManyVisitInput = {
    id?: number
    photoUrl: string
    createdAt?: Date | string
  }

  export type VisitPhotoUpdateWithoutVisitInput = {
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitPhotoUncheckedUpdateWithoutVisitInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitPhotoUncheckedUpdateManyWithoutVisitInput = {
    id?: IntFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}