import { NextResponse } from 'next/server';

/** OpenAPI 3.1 description for the public lead endpoint (machine-readable; RFC 8631 service-desc). */
const SPEC = {
  openapi: '3.1.0',
  info: {
    title: 'Cikgu Ram public API',
    version: '1.0.0',
    description:
      'Minimal HTTP surface for agent and integration discovery. Lead submissions POST JSON to /api/lead.',
  },
  servers: [{ url: '/' }],
  paths: {
    '/api/lead': {
      post: {
        summary: 'Submit driving-school registration interest',
        operationId: 'submitLead',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                additionalProperties: false,
                required: ['name', 'phone', 'category', 'citizenship', 'licenseType'],
                properties: {
                  name: { type: 'string', minLength: 2, maxLength: 100 },
                  phone: {
                    type: 'string',
                    description: 'Malaysian mobile format (+60 / 0 prefix)',
                  },
                  category: {
                    type: 'string',
                    enum: [
                      'University Student',
                      'Parent registering for a teen',
                      'Working Professional',
                    ],
                  },
                  citizenship: { type: 'string', enum: ['Malaysian', 'Non-Malaysian'] },
                  licenseType: { type: 'string', enum: ['D', 'DA'] },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Accepted',
            content: {
              'application/json': {
                schema: { type: 'object', properties: { ok: { type: 'boolean' } } },
              },
            },
          },
          '400': { description: 'Validation error' },
          '429': { description: 'Rate limited' },
          '502': { description: 'Lead webhook rejected or failed to accept the submission' },
          '503': { description: 'Service unavailable (e.g. webhook not configured in production)' },
        },
      },
    },
  },
} as const;

export async function GET() {
  return NextResponse.json(SPEC, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
