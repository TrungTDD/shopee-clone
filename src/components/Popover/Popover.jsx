import * as S from './popover.style';

export default function Popover({ showPopover, children }) {
  return (
    <>
      {showPopover && (
        <S.Drawer>
          <S.PopoverArrow />
          <S.PopoverContent>{children}</S.PopoverContent>
        </S.Drawer>
      )}
    </>
  );
}
