import { SVGProps } from 'react';

export type IconVariants =
    | 'menu'
    | 'arrow'
    | 'bell'
    | 'chevron'
    | 'close'
    | 'colors'
    | 'container'
    | 'eye'
    | 'filter'
    | 'help'
    | 'hexagon'
    | 'lightning'
    | 'loading'
    | 'logo'
    | 'pencil'
    | 'plus'
    | 'project'
    | 'puzzle'
    | 'star'
    | 'trash'
    | 'user'
    | 'logout';

export interface IIcon extends SVGProps<SVGSVGElement> {
    variant: IconVariants;
    className?: string;
}
