import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  // Create 'users' table
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('fullname').nullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });

  // Create 'tokens' table
  await knex.schema.createTable('tokens', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('value').notNullable();
    table
      .enum('token_type', ['phone', 'refresh', 'email']) // Enum for token types
      .notNullable();
    table
      .uuid('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .nullable();
    table.timestamps(true, true);
  });

  // Create 'posts' table
  await knex.schema.createTable('posts', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table
      .uuid('user_id')
      .references('id')
      .inTable('users')
      .onDelete('SET NULL')
      .nullable();
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.timestamps(true, true);
  });

  // Create 'likes' table
  await knex.schema.createTable('likes', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table
      .uuid('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .notNullable();
    table
      .uuid('post_id')
      .references('id')
      .inTable('posts')
      .onDelete('CASCADE')
      .notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .dropTableIfExists('likes')
    .dropTableIfExists('posts')
    .dropTableIfExists('tokens')
    .dropTableIfExists('users');
}
