export async function get() {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    });
}