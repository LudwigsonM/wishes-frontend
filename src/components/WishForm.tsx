import { Button, Input, MenuItem, Switch, Select, Stack } from "@mui/material";
import { FormEvent, useState, FC } from "react";
import { createWish } from "../services/wishes";
import "../scss/index.scss";

export const WishForm: FC = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [isPossible, setIsPossible] = useState(true);
  const [priority, setPriority] = useState<1 | 2 | 3>(1);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createWish({
      name,
      type,
      isPossible,
      priority,
    });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="What is your wish ?"
      />
      <Input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder={"Type of wish ?"}
      />
      <Select
        value={priority}
        onChange={(e) => setPriority(e.target.value as 1 | 2 | 3)}
      >
        <MenuItem value={1}>{1}</MenuItem>
        <MenuItem value={2}>{2}</MenuItem>
        <MenuItem value={3}>{3}</MenuItem>
      </Select>

      <Stack id="toggle" direction="row" spacing={1} alignItems="center">
        <Switch
          checked={isPossible}
          onChange={() => setIsPossible(!isPossible)}
        />
      </Stack>
      <Button type="submit">Make Wish</Button>
    </form>
  );
};
