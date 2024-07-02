import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const workspace = pgTable("workspace", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }),
  workspaceOwner: uuid("workspace_owner").notNull(),
  title: text("title").notNull(),
  iconId: text("icon_id").notNull(),
  date: text("in_trash"),
  logo: text("logo"),
  bannerUrl: text("banner_url"),
});
