import { Session } from "next-auth";

export interface SessionExt extends Session {
	address?: string | null;
}