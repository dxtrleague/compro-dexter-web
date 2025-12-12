export function getStatusColor(status: string): string {
  switch (status) {
    case 'Completed':
      return 'bg-green-50 text-green-600';
    case 'In Progress':
      return 'bg-blue-50 text-blue-600';
    case 'Planning':
      return 'bg-amber-50 text-amber-600';
    default:
      return 'bg-gray-50 text-gray-600';
  }
}