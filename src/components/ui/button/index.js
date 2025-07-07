import { cva } from 'class-variance-authority';

export { default as Button } from './Button.vue';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-background hover:opacity-80 shadow-md hover:shadow-lg',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg',
        outline:
          'border-2 border-accent bg-background hover:bg-accent hover:text-white shadow-sm hover:shadow-md',
        secondary:
          'bg-secondary text-primary hover:bg-secondary/80 shadow-md hover:shadow-lg',
        ghost: 'hover:bg-accent-muted hover:text-accent',
        link: 'text-accent underline-offset-4 hover:underline',
        gradient:
          'bg-gradient-to-r from-accent to-accent-muted text-white hover:from-accent/90 hover:to-accent-muted/90 shadow-lg hover:shadow-xl',
        glass:
          'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl',
        food: 'bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-xl border-2 border-accent/80',
        foodOutline:
          'bg-transparent text-accent border-2 border-accent hover:bg-accent-muted shadow-sm hover:shadow-md',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export { buttonVariants };
