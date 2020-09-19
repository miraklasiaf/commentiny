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

import { deleteSite } from '@/lib/db'
import { useAuth } from '@/context/auth'
import { Trash } from '@/components/icons'

const DeleteSitebutton = ({ siteId }) => {
  const [isOpen, setIsOpen] = useState()
  const cancelRef = useRef()
  const auth = useAuth()

  const onClose = () => setIsOpen(false)

  const onDelete = () => {
    deleteSite(siteId)
    mutate(
      ['/api/sites', auth.user.token],
      async (data) => {
        return {
          sites: data.sites.filter((site) => site.id !== siteId)
        }
      },
      false
    )
    onClose()
  }

  return (
    <>
      <IconButton
        aria-label="Delete site"
        icon={<Trash h={5} color="red.600" />}
        variant="ghost"
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Site
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? This will also delete all comment left on the site. You can't
              undo this action afterwards.
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

export default DeleteSitebutton
