import * as React from 'react';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import './TabBar.css';

// mostly from https://mui.com/joy-ui/react-list/#navigation-menu

const useRovingIndex = (options) => {
  const { initialActiveIndex = 0, vertical = false, handlers = {} } = options || {};
  const [activeIndex, setActiveIndex] = React.useState(initialActiveIndex);
  const targetRefs = React.useRef([]);
  const targets = targetRefs.current;
  const focusNext = () => {
    let newIndex = activeIndex + 1;
    if (newIndex >= targets.length) {
      newIndex = 0;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const focusPrevious = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = targets.length - 1;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const getTargetProps = (index) => ({
    ref: (ref) => {
      if (ref) {
        targets[index] = ref;
      }
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (e) => {
      if (Number.isInteger(activeIndex)) {
        if (e.key === (vertical ? 'ArrowDown' : 'ArrowRight')) {
          focusNext();
        }
        if (e.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) {
          focusPrevious();
        }
        handlers.onKeyDown?.(e, { setActiveIndex });
      }
    },
    onClick: () => {
      setActiveIndex(index);
    },
  });
  return {
    activeIndex,
    setActiveIndex,
    targets,
    getTargetProps,
    focusNext,
    focusPrevious,
  };
};

const ExpandableItem = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });

  const open = Boolean(anchorEl);
  const id = open ? 'about-popper' : undefined;
  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Box onMouseLeave={() => setAnchorEl(null)}>
        <ListItemButton
          aria-haspopup
          aria-expanded={open ? 'true' : 'false'}
          ref={ref}
          {...props}
          role="menuitem"
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
          sx={{
            ...(open && theme.button.hover),
          }}
        >
          Units <KeyboardArrowDown />
        </ListItemButton>
        <PopperUnstyled
          id={id}
          open={open}
          anchorEl={anchorEl}
          disablePortal
          keepMounted
        >
          <List
            role="menu"
            aria-label="About"
            variant="outlined"
            sx={{
              my: 2,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--List-divider-gap': '4px',
              '--List-decorator-size': '32px',
            }}
          >
            <ListItem role="none">
              <ListItemButton className="hoverable" role="menuitem" {...getTargetProps(0)}>
                Overview
              </ListItemButton>
            </ListItem>
            <ListItem role="none">
              <ListItemButton className="hoverable" role="menuitem" {...getTargetProps(1)}>
                Administration
              </ListItemButton>
            </ListItem>
            <ListItem role="none">
              <ListItemButton className="hoverable" role="menuitem" {...getTargetProps(2)}>
                Facts
              </ListItemButton>
            </ListItem>
          </List>
        </PopperUnstyled>
      </Box>
    </ClickAwayListener>
  );
});

export default function TabBar() {
  const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
    useRovingIndex();
  return (
      <List
        role="menubar"
        className="bar"
        style={{display: 'flex', flexDirection: 'row', alignItems:"flex-end", justifyContent: "flex-end", paddingRight:50}}
        sx={{
          '--List-padding': '4px',
          '--List-gap': '8px',
        }}
      >
          <ListItem className="bar-button hoverable" role="none">
            <ExpandableItem
              onMouseEnter={() => {
                setActiveIndex(1);
                targets[1].focus();
              }}
              focusNext={focusNext}
              focusPrevious={focusPrevious}
              {...getTargetProps(1)}
            />
          </ListItem>

          <ListItem className="bar-button hoverable" role="none">
            <ListItemButton
              role="menuitem"
              {...getTargetProps(0)}
              component="a"
              href="#navigation-menu"
            >
              About
            </ListItemButton>
          </ListItem>
      </List>
  );
}

const theme = {
  button: {
    hover: {
      backgroundColor: "rgb(87, 87, 87)",
      borderRadius: 8
    }
  }
}