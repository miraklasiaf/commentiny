import React, { useState, useRef } from 'react'
import { mutate } from 'swr'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  Button
} from '@chakra-ui/core'
import { deleteComment } from '@/lib/db'
import { useAuth } from '@/context/auth'
import { Trash } from '@/components/icons'

const DeleteCommentButton = ({ commentId }) => {
  const [isOpen, setIsOpen] = useState()
  const cancelRef = useRef()
  const auth = useAuth()

  const onClose = () => setIsOpen(false)

  const onDelete = () => {
    deleteComment(commentId)
    mutate(
      ['/api/comment', auth.user.token],
      async (data) => {
        return {
          comment: data.comment.filter((comment) => comment.id !== commentId)
        }
      },
      false
    )
    onClose()
  }

  return (
    <>
      <IconButton
        aria-label="Delete feedback"
        icon={<Trash h={5} />}
        variant="ghost"
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button fontWeight="bold" colorScheme="red" onClick={onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteCommentButton
