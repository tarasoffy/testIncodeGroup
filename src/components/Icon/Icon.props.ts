export type IconNames = 
    'Home'|
    'Heart'|
    'HeartFill'|
    'Bookmark'|
    'Search'|
    'NavigateNext'|
    'NavigateBefore'

export type Props = {
    name: IconNames,
    color: string,
    size: number,
    stroke?: string,
};
