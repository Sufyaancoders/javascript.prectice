 import type { FC } from 'react';
import { Button, Checkbox, Paper, Stack, Typography } from '@mui/material';
type Props = {
        item: TodoitemType;
        Completed: (id: TodoitemType['id']) => void;
        deleted: (id: TodoitemType['id']) => void;
         Edites: (newTitle: string) => void;

    };
    // When using FC, you can define the props type explicitly.
    // This makes it easier to understand what props the component expects.
   const TodoItem: FC<Props> = ({ item, Completed, deleted, Edites }) => {
    return (
     <Paper>
        <Stack direction={'row'} alignItems={'center'} p={1} spacing={2}>
          <Typography>{item.tittle}</Typography>
          <Checkbox sx={{ marginRight: 'auto' }} checked={item?.isCompleted} onChange={() => Completed(item.id)} />
          <Button onClick={() => Edites(prompt('Enter new title:', item.tittle) || '')}>Edit</Button>
          <Button onClick={() => deleted(item.id)}>Delete</Button>
          
        </Stack>
     </Paper>
    );
   };


export default TodoItem;
