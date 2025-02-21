
export function generateServiceId(service: { name: string }): string {
  return service.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}
