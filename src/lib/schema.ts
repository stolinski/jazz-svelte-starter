import { schema as s } from 'jazz-tools';

import { schema as betterAuthSchema } from './schema-better-auth/schema';

const schema = {
	...betterAuthSchema
	// Add your own tables here
};

type AppSchema = s.Schema<typeof schema>;

export const app: s.App<AppSchema> = s.defineApp(schema);

// Add the rest of your schema types here
export type User = s.RowOf<typeof app.better_auth_user>;
