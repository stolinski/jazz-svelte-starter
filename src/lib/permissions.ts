import { schema as s } from 'jazz-tools';

import { app } from './schema';

export const permissions = s.definePermissions(
	app,
	({ policy, allOf, allowedTo, anyOf, session }) => {
		const is_admin = session.where({ 'claims.is_admin': true });

		policy.better_auth_user.allowRead.where({ id: session.user_id });
		policy.better_auth_user.allowReads.where(is_admin);
		policy.better_auth_user.allowUpdate.where(anyOf([{ id: session.user_id }, is_admin]));
		policy.better_auth_user.allowDelete.where(is_admin);

		policy.better_auth_session.allowRead.never();
		policy.better_auth_session.allowInsert.never();
		policy.better_auth_session.allowUpdate.never();
		policy.better_auth_session.allowDelete.never();

		policy.better_auth_account.allowRead.never();
		policy.better_auth_account.allowInsert.never();
		policy.better_auth_account.allowUpdate.never();
		policy.better_auth_account.allowDelete.never();

		policy.better_auth_verification.allowRead.never();
		policy.better_auth_verification.allowInsert.never();
		policy.better_auth_verification.allowUpdate.never();
		policy.better_auth_verification.allowDelete.never();

		policy.better_auth_jwks.allowRead.never();
		policy.better_auth_jwks.allowInsert.never();
		policy.better_auth_jwks.allowUpdate.never();
		policy.better_auth_jwks.allowDelete.never();
	}
);
