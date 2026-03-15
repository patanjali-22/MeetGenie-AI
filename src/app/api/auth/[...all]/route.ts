import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { nextCookies } from "next/headers";

export const dynamic = "force-dynamic";

export const handler = async (req: Request) => { toNextJsHandler(auth);
