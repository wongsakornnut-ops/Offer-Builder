export default {
  async fetch(request, env) {
    const res = await fetch(
      'https://raw.githubusercontent.com/wongsakornnut-ops/offer-builder/claude/scenario-comparison-app-Sbrnw/index.html',
      { headers: { 'Authorization': `token ${env.GITHUB_TOKEN}` } }
    );
    return new Response(await res.text(), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
}
