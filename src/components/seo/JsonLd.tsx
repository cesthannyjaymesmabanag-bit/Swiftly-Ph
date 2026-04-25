type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // JSON.stringify gives us safe escaping for embedding in script content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
