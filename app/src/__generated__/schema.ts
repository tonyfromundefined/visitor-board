import { GraphQLResolveInfo } from 'graphql';
import { Comment as CommentModel } from '../core/Comment/CommentState';
import { Context } from '../graphql/defineContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = Node & {
  __typename?: 'Comment';
  /** 작성자 이름 */
  authorName: Scalars['String']['output'];
  /** 콘텐츠 (Multiline Text) */
  content: Scalars['String']['output'];
  /** (Auto Generated) ISO8601 DateTime Spec */
  createdAt: Scalars['String']['output'];
  /** (Auto Generated) ID */
  id: Scalars['ID']['output'];
};

export type CreateCommentInput = {
  authorName: Scalars['String']['input'];
  content: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateCommentOutput = {
  __typename?: 'CreateCommentOutput';
  comment: Comment;
};

export type DeleteCommentInput = {
  id: Scalars['ID']['input'];
  passwordConfirm: Scalars['String']['input'];
};

export type DeleteCommentOutput = {
  __typename?: 'DeleteCommentOutput';
  comment: Comment;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CreateCommentOutput;
  deleteComment: DeleteCommentOutput;
  updateComment: UpdateCommentOutput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** 작성된 모든 코멘트를 내려받습니다 */
  allComments: Array<Comment>;
  ping: Scalars['Boolean']['output'];
};

export type UpdateCommentInput = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  passwordConfirm: Scalars['String']['input'];
};

export type UpdateCommentOutput = {
  __typename?: 'UpdateCommentOutput';
  comment: Comment;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Node: ( CommentModel );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<CommentModel>;
  CreateCommentInput: CreateCommentInput;
  CreateCommentOutput: ResolverTypeWrapper<Omit<CreateCommentOutput, 'comment'> & { comment: ResolversTypes['Comment'] }>;
  DeleteCommentInput: DeleteCommentInput;
  DeleteCommentOutput: ResolverTypeWrapper<Omit<DeleteCommentOutput, 'comment'> & { comment: ResolversTypes['Comment'] }>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateCommentInput: UpdateCommentInput;
  UpdateCommentOutput: ResolverTypeWrapper<Omit<UpdateCommentOutput, 'comment'> & { comment: ResolversTypes['Comment'] }>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Comment: CommentModel;
  CreateCommentInput: CreateCommentInput;
  CreateCommentOutput: Omit<CreateCommentOutput, 'comment'> & { comment: ResolversParentTypes['Comment'] };
  DeleteCommentInput: DeleteCommentInput;
  DeleteCommentOutput: Omit<DeleteCommentOutput, 'comment'> & { comment: ResolversParentTypes['Comment'] };
  ID: Scalars['ID']['output'];
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  Query: {};
  String: Scalars['String']['output'];
  UpdateCommentInput: UpdateCommentInput;
  UpdateCommentOutput: Omit<UpdateCommentOutput, 'comment'> & { comment: ResolversParentTypes['Comment'] };
}>;

export type CommentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  authorName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateCommentOutputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateCommentOutput'] = ResolversParentTypes['CreateCommentOutput']> = ResolversObject<{
  comment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteCommentOutputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteCommentOutput'] = ResolversParentTypes['DeleteCommentOutput']> = ResolversObject<{
  comment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createComment?: Resolver<ResolversTypes['CreateCommentOutput'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'input'>>;
  deleteComment?: Resolver<ResolversTypes['DeleteCommentOutput'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'input'>>;
  updateComment?: Resolver<ResolversTypes['UpdateCommentOutput'], ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'input'>>;
}>;

export type NodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Comment', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allComments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  ping?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type UpdateCommentOutputResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdateCommentOutput'] = ResolversParentTypes['UpdateCommentOutput']> = ResolversObject<{
  comment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Comment?: CommentResolvers<ContextType>;
  CreateCommentOutput?: CreateCommentOutputResolvers<ContextType>;
  DeleteCommentOutput?: DeleteCommentOutputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateCommentOutput?: UpdateCommentOutputResolvers<ContextType>;
}>;

