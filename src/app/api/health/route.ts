export async function GET() {
  return Response.json({
    ok: true,
    service: "guild-site",
    timestamp: new Date().toISOString(),
  });
}
