import { Skeleton } from "../ui/skeleton";

export function ProductCardSkeleton() {
	return (
		<div className='bg-card border border-border rounded-lg shadow-sm p-6 space-y-4'>
			<Skeleton className='w-full h-48 rounded-md' />

			<div className='space-y-2'>
				<Skeleton className='h-6 w-3/4' />
				<Skeleton className='h-4 w-1/2' />
			</div>

			<div className='space-y-2'>
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-5/6' />
			</div>

			<Skeleton className='h-4 w-1/3' />

			<Skeleton className='h-10 w-full rounded-md' />
		</div>
	);
}
