import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { Github, Plus } from "lucide-react";

const repositorySchema = z.object({
  repository: z.string()
});

type RepositorySchema = z.infer<typeof repositorySchema>;

export function Welcome() {
  const [repositories, setRepositories] = useState<string[]>([]);

  const { register, handleSubmit, reset } = useForm<RepositorySchema>({
    resolver: zodResolver(repositorySchema)
  });

  function handleFormRepositories(data: RepositorySchema) {
    setRepositories([...repositories, data.repository]);
    reset()
  }

  return (
    <main className="flex flex-col items-center pt-16 pb-4 h-screen">
      <ModeToggle />

      <Card className="w-[100rem] rounded-2xl p-5 gap-16">
        <CardHeader>
          <h1 className="flex items-center gap-4 text-2xl">
            <Github  /> My repos
          </h1>
        </CardHeader>
        <CardContent>

          <form onSubmit={handleSubmit(handleFormRepositories)} className="flex max-w-full items-center space-x-2">
            <Input {...register('repository')} type="text" placeholder="Add repository" />

            <Button type="submit" color="primary" size="sm">
              <Plus />
            </Button>
          </form>

          <ul className="flex-1 flex flex-col gap-2 mt-4 ">
            {repositories.map((repository, index) => (
              <li key={index} className="flex items-center gap-2">{repository}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

    </main>
  );
}
