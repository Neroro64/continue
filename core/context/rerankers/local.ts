import { Chunk, Reranker } from "../..";

export class LocalReranker implements Reranker {
  name = "local";

  constructor(
    private readonly params: {
      apiBase: string;
      apiKey: string;
      model?: string;
    },
  ) { }

  async rerank(query: string, chunks: Chunk[]): Promise<number[]> {
    const resp = await fetch(`${this.params.apiBase}/v1/rerank`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.params.apiKey}`,
      },
      body: JSON.stringify({
        query,
        documents: chunks.map((chunk) => chunk.content),
        model: this.params.model ?? "default-reranker",
      }),
    });
    const data = await resp.json();
    const results = data.data.sort((a: any, b: any) => a.index - b.index);
    return results.map((result: any) => result.relevance_score);
  }
}
