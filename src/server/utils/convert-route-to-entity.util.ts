const mapping: Record<string, string> = {
  organizations: 'organization',
  'team-members': 'team_member',
  users: 'user',
  'virtual-items': 'virtual_item',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
