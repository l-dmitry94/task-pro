import { SVGProps } from 'react';

type IconVariants =
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
    | 'user';

export interface IIcon extends SVGProps<SVGSVGElement> {
    variant: IconVariants;
    className?: string;
}
