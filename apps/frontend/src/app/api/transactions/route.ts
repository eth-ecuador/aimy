import { NextRequest, NextResponse } from "next/server";

import { createTransaction, getTransactionsByAddress } from "@repo/database";
import { auth } from "@/auth";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    const address = searchParams.get("address");

    const result = await getTransactionsByAddress({
      address: address as string,
      limit: limit ? parseInt(limit, 15) : undefined,
      offset: offset ? parseInt(offset, 15) : undefined,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newTransaction = await createTransaction(body);

    return NextResponse.json(newTransaction);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
