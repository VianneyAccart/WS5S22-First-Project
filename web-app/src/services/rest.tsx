export const WILDERS_PATH = "/wilders";
export const SCHOOLS_PATH = "/schools";

export enum HTTPVerb {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export async function query(
  url: string,
  method: HTTPVerb,
  body?: Record<string, unknown>
): Promise<any> {
  let httpStatusError = false;
  try {
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      ...(body && { body: JSON.stringify(body) }),
    });

    const message = await response.json();
    if (!response.ok) {
      httpStatusError = true;
      throw Error(message.error);
    }
    return message;
  } catch (error: any) {
    if (httpStatusError) throw Error(error.message);
    throw Error("Unable to reach the server. Check your internet connection");
  }
}
