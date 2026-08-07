export async function onRequest(context) {
  const url = new URL(context.request.url);
  const action = url.searchParams.get('action');
  
  // Proxy to PW API
  const response = await fetch(`https://api.penpencil.co/v3/${action}`, {
    headers: { 'Content-Type': 'application/json' }
  });
  
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
    }
